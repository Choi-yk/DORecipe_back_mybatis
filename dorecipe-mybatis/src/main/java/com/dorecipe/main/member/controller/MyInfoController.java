package com.dorecipe.main.member.controller;

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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dorecipe.main.member.service.MemberService;
import com.dorecipe.main.member.vo.MemberVO;
import com.dorecipe.main.recipe.service.RecipeService;
import com.dorecipe.main.recipe.vo.RecipeVO;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000") //리액트 기본 포트 번호 3000
@RequiredArgsConstructor
@RestController //responsebody + controller = json형태로 객체데이터 반환, restAPI
public class MyInfoController {
	@Autowired
	private MemberService memberService;
	
	@Autowired
	private RecipeService recipeService;
	
	//aplication.properties 파일업로드 경로 가져오기
//	@Value("${part6.upload.path}")
//	private String uploadPath;
	
	// 멤버 정보 가져오기
	@GetMapping("/member/info/{member_id}")
	public MemberVO memberDetail(@PathVariable("member_id") String member_id) throws Exception {
		System.out.println("@@@ 멤버 컨트롤러 member_id : " + member_id);
		
		MemberVO memberVO = memberService.listMemberDetails(member_id);
		
		return memberVO;
	}
	
	// 멤버 정보 수정
	@PostMapping("/member/info/update")
	public void Update(/*String member_id,*/ MemberVO memberVO/*,  @RequestParam(value = "member_image", required = false) MultipartFile[] uploadFiles*/) throws Exception {
		
		// 파일 없으면 나머지 저장
//		if(uploadFiles == null) {
//			memberService.ModifyMember(memberVO);
//			return;
//		}
//		
//		fileUpload(memberVO, uploadFiles);
		
		memberService.ModifyMember(memberVO);
		
		System.out.println("수정됨 - Controller");
	}
	
	@GetMapping("/member/info/delete/{member_id}")
	public void Delete(@PathVariable("member_id") String member_id) throws Exception {
		memberService.DeleteMember(member_id);
		
		System.out.println("삭제됨 - Controller");	
	}
	
	// 좋아요한 레시피 조회
	
	// 작성한 레시피 조회
	@RequestMapping("/member/info/complete/{member_id}")
	public List<RecipeVO> recordCompleteRecipe(@PathVariable("member_id") String member_id) {
		List<RecipeVO> recipeList = recipeService.recordCompleteRecipe(member_id);
		
	    System.out.println("작성한 레시피 조회 성공!! :: " + member_id);
		
		return recipeList;
	}
  
    // 작성중인 레시피 조회
	@RequestMapping("/recipe/recording/{member_id}")
	public List<RecipeVO> recordRecipe(@PathVariable("member_id") String member_id) {
		List<RecipeVO> recipeList = recipeService.recordRecipe(member_id);
		
		System.out.println("작성중 레시피 조회 성공!! :: " + member_id);
		
		return recipeList;
	}
	
	// ////////////////////// 파일 //////////////////////
	//파일 업로드
//	private MemberVO fileUpload(MemberVO memberVO, MultipartFile[] uploadFiles) {
//		
//		//MultipartFile은 단건만 배열로 설정하면 다수의 파일을 받을 수있습니다.
//		//배열을 활용하면 동시에 여러개의 파일 정보를 처리할 수 있으므로 화면에서 여러개의 파일을 동시에 업로드 할 수 있습니다.
//		
//		for(MultipartFile uploadFile : uploadFiles) {
//			
//			//브라우저에 따라 업로드하는 파일의 이름은 전체경로일 수도 있고(Internet Explorer),
//			//단순히 파일의 이름만을 의미할 수도 있습니다.(chrome browser)
//			String originalName = uploadFile.getOriginalFilename();
//			String fileName = originalName.substring(originalName.lastIndexOf("//")+1);
//			
//			//날짜 폴더 생성
//	        String folderPath = makeFolder();
//	        //UUID
//	        //같은이름의 파일도 uuid를 앞에 붙여 unique파일명 만들기
//	        String uuid = UUID.randomUUID().toString();
//	        //저장할 파일 이름 중간에 "_"를 이용하여 구분
//	        String saveName = uploadPath + File.separator + folderPath +File.separator + uuid + "_" + fileName;
//	        //os별 파일 구분자(File.separator)
//	        System.out.println("전체경로" + saveName);
//	        Path savePath = Paths.get(saveName);
//	        //Paths.get() 메서드는 특정 경로의 파일 정보를 가져옵니다.(경로 정의하기)
//	        
//	        
//			
//	        //db에 저장 할 이미지 경로
//	        String ymd = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
//			String member_path = "/img/member/" + ymd + "/" + uuid + "_" + fileName;
//								// ex)/img/event/2022/09/01/uuid_fileName --db에 저장
//			System.out.println("저장한 경로"+ member_path);
//			memberVO.setMember_imagePath(member_path);
//	        
//	        try{
//	        	uploadFile.transferTo(savePath);
//	            //uploadFile에 파일을 업로드 하는 메서드 transferTo(file)
//	        } catch (IOException e) {
//	             e.printStackTrace();
//	             //printStackTrace()를 호출하면 로그에 Stack trace가 출력됩니다.
//	        }
//	        
//		}//for end
//		 return memberVO;
//	}
//
//	//폴더 생성
//	private String makeFolder() {
//    
//	  	String str = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
//	    //LocalDate를 문자열로 포멧
//	    String folderPath = str.replace("/", File.separator);
//	    //만약 Data 밑에 exam.jpg라는 파일을 원한다고 할때,
//	    //윈도우는 "Data\\"eaxm.jpg", 리눅스는 "Data/exam.jpg"라고 씁니다.
//	    //그러나 자바에서는 "Data" +File.separator + "exam.jpg" 라고 쓰면 됩니다.
//	    
//	    //make folder ==================
//	    File uploadPathFolder = new File(uploadPath, folderPath);
//	    //File newFile= new File(dir,"파일명");
//	    //->부모 디렉토리를 파라미터로 인스턴스 생성
//	    
//	    if(uploadPathFolder.exists() == false){
//	        uploadPathFolder.mkdirs();
//	        //만약 uploadPathFolder가 존재하지않는다면 makeDirectory하라는 의미입니다.
//	        //mkdir(): 디렉토리에 상위 디렉토리가 존재하지 않을경우에는 생성이 불가능한 함수
//			//mkdirs(): 디렉토리의 상위 디렉토리가 존재하지 않을 경우에는 상위 디렉토리까지 모두 생성하는 함수
//	       }
//	     return folderPath;
//   }
	
}
