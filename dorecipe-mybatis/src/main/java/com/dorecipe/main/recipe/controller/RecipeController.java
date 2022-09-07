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


import com.dorecipe.main.recipe.fileUpload.RecipeFileUpload;
import com.dorecipe.main.recipe.service.RecipeService;
import com.dorecipe.main.recipe.vo.RecipeVO;

import lombok.RequiredArgsConstructor;


@CrossOrigin(origins="http://localhost:3000") 
@RequestMapping(value="/recipe")
@RequiredArgsConstructor
@RestController
public class RecipeController extends RecipeFileUpload{


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
	public String recipeTemporarySave(RecipeVO recipeVO, @RequestParam(value = "recipe_thumbnail", required = false)MultipartFile[] uploadFiles) {
		
		if(uploadFiles == null) {
			recipeService.recipeTemporarySave(recipeVO);
			System.out.println("레시피 등록됨 근데 이미지 경로가 null임 - Controller");
			return recipeVO.toString();		
		} 
//		System.out.println("~~~~~~~~~~~~~~~~~~uploadFiles"+uploadFiles+"~~~~~~~~~~~~~~~~~~uploadFiles");
		thumnailfileUpload(recipeVO,uploadFiles);
		recipeService.recipeTemporarySave(recipeVO);
		System.out.println("레시피 등록됨 - Controller");
		return recipeVO.toString();

	}
	
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
	public String insertRecipeOrder(RecipeVO recipeVO, @RequestParam(value = "recipe_imgs_steps", required = false)MultipartFile[] uploadFiles) {
		
		
		if(uploadFiles == null) {
			recipeService.insertRecipeOrder(recipeVO);
			System.out.println("레시피 등록됨 근데 upload파일이 null임 - Controller");
			return "redirect:/recipe/list";
		} 
		stepsfileUpload(recipeVO,uploadFiles);
		recipeService.insertRecipeOrder(recipeVO);
		System.out.println("레시피 순서 정상 등록");
		return recipeVO.toString();
	}
	
	//요리 완성 사진 추가 및 요라탑 저장
	@PostMapping("/insertRecipeComplete")
	public String insertCompleteRecipe(RecipeVO recipeVO, @RequestParam(value = "recipe_imgs_completed", required = false)MultipartFile[] uploadFiles) {
		
		
		if(uploadFiles == null) {
			recipeService.insertRecipeComplete(recipeVO);
			System.out.println("레시피 등록됨 근데 upload파일이 null임 - Controller");
			return "redirect:/recipe/list";
		} 
		completedImgfileUpload(recipeVO,uploadFiles);
		recipeService.insertRecipeComplete(recipeVO);
		System.out.println("레시피 순서 정상 등록");
		return recipeVO.toString();
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
	
	//레시피 검색
	@GetMapping("/search/{recipe_title}")
	public List<RecipeVO> searchRecipe(@PathVariable("recipe_title")String recipe_title) {
		System.out.println("검색어 : " + recipe_title);
		
		return recipeService.searchRecipe(recipe_title);
	}
	

}
