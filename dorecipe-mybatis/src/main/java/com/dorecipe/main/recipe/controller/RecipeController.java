package com.dorecipe.main.recipe.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

//import com.dorecipe.main.recipe.fileUpload.RecipeFileUpload;
import com.dorecipe.main.recipe.service.RecipeService;
import com.dorecipe.main.recipe.vo.RecipeVO;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000") 
@RequestMapping(value="/recipe")
@RequiredArgsConstructor
@RestController
public class RecipeController{

	@Autowired
	private RecipeService recipeService;

	
	//레시피 목록
	@RequestMapping("/list")
	public String EventList(Model model) {
		List<RecipeVO> recipeList = recipeService.getList();
		model.addAttribute("recipeList",recipeList);
		return "recipe";
	}
	
	//레시피 상세
	@RequestMapping("/detail/{recipe_num}")
	public String detail(Model model, @PathVariable Integer recipe_num) {
		
	//레시피번호확인
	System.out.println("------------------레시피 컨트롤러 조회 recipe_num : " + recipe_num);
	
	RecipeVO recipeVO = recipeService.getDetail(recipe_num);			//레시피 상세정보
	List<RecipeVO> recipeOrder = recipeService.getOrder(recipe_num);	//레시피 조리순서
	List<RecipeVO> comment = recipeService.getComment(recipe_num);		//코멘트
	
	model.addAttribute("recipeVO",recipeVO);
	model.addAttribute("recipeOrder",recipeOrder);
	model.addAttribute("comment",comment);
	
	return "recipeDetail";
	}
	
	@PostMapping("/insert")
	public String insert(RecipeVO recipeVO) {
		recipeService.insertRecipe(recipeVO);
		
		System.out.println("레시피 등록됨 - Controller");
		
		return "redirect:/recipe/list";
	}
	
	//임시저장
	@PostMapping("/save")
	public String recipeTemporarySave(RecipeVO recipeVO, @RequestParam(value = "recipe_image", required = false)MultipartFile[] uploadFiles) {
		
		if(uploadFiles == null) {
			recipeService.recipeTemporarySave(recipeVO);
			System.out.println("레시피 등록됨 근데 이미지 경로가 null임 - Controller");
			return recipeVO.toString();		
		}
		fileUpload(recipeVO,uploadFiles);
		recipeService.recipeTemporarySave(recipeVO);
		System.out.println("레시피 등록됨 - Controller");
		return recipeVO.toString();

	}
//	
//	//임시저장
//	@PostMapping("/save")
//	public String recipeTemporarySave(RecipeVO recipeVO) {
//		recipeService.recipeTemporarySave(recipeVO);
//		
//		System.out.println("레시피 등록됨 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
	
	//레시피 번호 가져오기
	@PostMapping("/getRecipeNum")
	public Integer recipe_num(String member_id) throws Exception{
		System.out.println(member_id+"!!!!!!!!!!!!!!!!memberID");
		System.out.println(recipeService.getRecipeNum(member_id));
		
		return recipeService.getRecipeNum(member_id);
	}
	
	//요리 재료 등록
	@PostMapping("/insertRecipeIngredients")
	public String insertRecipeIngredients(RecipeVO recipeVO) {
	
		recipeService.insertRecipeIngredients(recipeVO);
		
		System.out.println("레시피 등록됨 - Controller");
		
		return "redirect:/recipe/list";
	}
	


	
	//요리 순서 추가
	@PostMapping("/insertRecipeOrder")
	public String insertRecipeOrder(RecipeVO recipeVO) {
		recipeService.insertRecipeOrder(recipeVO);
		System.out.println("레시피 등록됨 - Controller");
		
		return "redirect:/recipe/list";
	}
	
	
	
	//레시피 수정
	@GetMapping("/update/{recipe_num}")
	public String update(@PathVariable("recipe_num") int recipe_num, Model model) {
		RecipeVO recipeVO = recipeService.getDetail(recipe_num);
		
		System.out.println(recipe_num);
		System.out.println(recipeVO.getRecipe_title());
		
		model.addAttribute("recipeVO", recipeVO);
		
		return "RecipeUpdate"; //jsp
	}
	@PostMapping("/update")
	public String update(RecipeVO recipeVO) {
		recipeService.updateRecipe(recipeVO);
		
		System.out.println("레시피 수정 - Controller");
		
		return "redirect:/recipe/list";
	}
	
	//레시피 삭제
	@GetMapping("delete/{recipe_num}")
	public String delete(@PathVariable("recipe_num") Integer recipe_num) {
		recipeService.deleteRecipe(recipe_num);
		
		System.out.println("레시피 삭제 성공!! - controller ");
		
		return "redirect:/recipe/list";
	}
	
	

	@Value("${part3.upload.path}")
	public String uploadPathThumbnail;
//	
//	@Value("${part4.upload.path}")
//	public String uploadPathStepImages;
//	
//	@Value("${part5.upload.path}")
//	public String uploadPathCompletedImages;
	
	public RecipeVO fileUpload(RecipeVO recipeVO, MultipartFile[] uploadFiles) {
		
		for(MultipartFile uploadFile:uploadFiles) {
			String originalName = uploadFile.getOriginalFilename();	//클라이언트의 이미지 퍼일명
			System.out.println("originalName:"+ originalName);
//			String fileName =originalName.substring(originalName.lastIndexOf("//")+1);	//마지막 //뒤의 파일이름가져오기
//			System.out.println("fileName:"+ fileName);
			
			//날짜폴더
			String folderPath = makeFolder();
			//랜덤 파일명으로 바꿔주기 (중복 방지)
			String uuid = UUID.randomUUID().toString();
			//저장할 이미지 이름들
			String saveThumbnailName = uploadPathThumbnail + File.separator +
					folderPath +File.separator + uuid +"_"+originalName;
//			String saveStepImgNames = uploadPathStepImages + File.separator +
//					folderPath +File.separator + uuid +"_"+originalName;
//			String saveCompleteImgNames = uploadPathCompletedImages + File.separator +
//					folderPath +File.separator + uuid +"_"+originalName;
			 System.out.println("전체경로" + saveThumbnailName);
			Path saveThumbnailPath = Paths.get(saveThumbnailName);
//			Path saveStepImgsPath = Paths.get(saveStepImgNames);
//			Path saveCompleteImgsPath = Paths.get(saveCompleteImgNames);

			System.out.println("savename: "+saveThumbnailPath);
//			System.out.println("savename: "+saveStepImgsPath);
//			System.out.println("savename: "+saveCompleteImgsPath);
			
			//db저장 이미지 경로
			String uploadDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
			String recipe_path = "/img/recipe/"+ uploadDate + "/"+uuid+"_"+originalName;
//			String recipe_steps_path = "/img/recipe/steps/"+ uploadDate + "/"+uuid+"_"+originalName;
//			String recipe_completed_path = "/img/recipe/completed/"+ uploadDate + "/"+uuid+"_"+originalName;
			
			System.out.println("db저장 경로: " +recipe_path);
			recipeVO.setRecipe_rpath(recipe_path);
//			System.out.println("db저장 경로: " +recipe_steps_path);
//			System.out.println("db저장 경로: " +recipe_completed_path);
//			
			try {
				uploadFile.transferTo(saveThumbnailPath);
//				uploadFile.transferTo(saveStepImgsPath);
//				uploadFile.transferTo(saveCompleteImgsPath);
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}	
		return recipeVO;
	}
	
	//폴더 생성
	private String makeFolder(){
    
	  	String uploadDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
	    //LocalDate를 문자열로 포멧
	    String folderPath = uploadDate.replace("/", File.separator);

	    File uploadPathThumbnailFolder = new File(uploadPathThumbnail, folderPath);
//	    File uploadPathStepImagesFolder = new File(uploadPathStepImages, folderPath);
//	    File uploadPathCompletedImagesFolder = new File(uploadPathCompletedImages, folderPath);

	    if(uploadPathThumbnailFolder.exists() == false){
	    	uploadPathThumbnailFolder.mkdirs();
	       }
//	    if(uploadPathStepImagesFolder.exists() == false){
//	    	uploadPathStepImagesFolder.mkdirs();
//	    }
//	    if(uploadPathCompletedImagesFolder.exists() == false){
//	    	uploadPathCompletedImagesFolder.mkdirs();
//	    }
	     return folderPath;
	
	}
}
