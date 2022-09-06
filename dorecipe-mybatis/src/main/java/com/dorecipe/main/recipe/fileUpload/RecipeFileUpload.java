package com.dorecipe.main.recipe.fileUpload;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import com.dorecipe.main.recipe.vo.RecipeVO;

public class RecipeFileUpload {

	@Value("${part3.upload.path}")
	public String uploadPathThumbnail;
	
	@Value("${part4.upload.path}")
	public String uploadPathStepImages;
	
	@Value("${part5.upload.path}")
	public String uploadPathCompletedImages;
	
	public RecipeVO fileupload(RecipeVO recipeVO, MultipartFile[] uploadFiles) {
		
		for(MultipartFile uploadFile:uploadFiles) {
			String originalName = uploadFile.getOriginalFilename();	//클라이언트의 이미지 퍼일명
//			System.out.println("originalName:"+ originalName);
//			String fileName =originalName.substring(originalName.lastIndexOf("//")+1);	//마지막 //뒤의 파일이름가져오기
//			System.out.println("fileName:"+ fileName);
			
			//날짜폴더
			String folderPath = makeFolder();
			//랜덤 파일명으로 바꿔주기 (중복 방지)
			String uuid = UUID.randomUUID().toString();
			//저장할 이미지 이름들
			String saveThumbnailName = uploadPathThumbnail + File.separator +
					folderPath +File.separator + uuid +"_"+originalName;
			String saveStepImgNames = uploadPathStepImages + File.separator +
					folderPath +File.separator + uuid +"_"+originalName;
			String saveCompleteImgNames = uploadPathCompletedImages + File.separator +
					folderPath +File.separator + uuid +"_"+originalName;
		
			Path saveThumbnailPath = Paths.get(saveThumbnailName);
			Path saveStepImgsPath = Paths.get(saveStepImgNames);
			Path saveCompleteImgsPath = Paths.get(saveCompleteImgNames);

			System.out.println("savename: "+saveThumbnailPath);
			System.out.println("savename: "+saveStepImgsPath);
			System.out.println("savename: "+saveCompleteImgsPath);
			
			//db저장 이미지 경로
			String uploadDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
			String recipe_path = "/img/recipe/thumbnail"+ uploadDate + "/"+uuid+"_"+originalName;
			String recipe_steps_path = "/img/recipe/steps"+ uploadDate + "/"+uuid+"_"+originalName;
			String recipe_completed_path = "/img/recipe/completed"+ uploadDate + "/"+uuid+"_"+originalName;
			
			System.out.println("db저장 경로: " +recipe_path);
			System.out.println("db저장 경로: " +recipe_steps_path);
			System.out.println("db저장 경로: " +recipe_completed_path);
			
			try {
				uploadFile.transferTo(saveThumbnailPath);
				uploadFile.transferTo(saveStepImgsPath);
				uploadFile.transferTo(saveCompleteImgsPath);
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
	    //만약 Data 밑에 exam.jpg라는 파일을 원한다고 할때,
	    //윈도우는 "Data\\"eaxm.jpg", 리눅스는 "Data/exam.jpg"라고 씁니다.
	    //그러나 자바에서는 "Data" +File.separator + "exam.jpg" 라고 쓰면 됩니다.
	    
	    //make folder ==================
	    File uploadPathThumbnailFolder = new File(uploadPathThumbnail, folderPath);
	    File uploadPathStepImagesFolder = new File(uploadPathStepImages, folderPath);
	    File uploadPathCompletedImagesFolder = new File(uploadPathCompletedImages, folderPath);
	    //File newFile= new File(dir,"파일명");
	    //->부모 디렉토리를 파라미터로 인스턴스 생성
	    
	    if(uploadPathThumbnailFolder.exists() == false){
	    	uploadPathThumbnailFolder.mkdirs();
	       }
	    if(uploadPathStepImagesFolder.exists() == false){
	    	uploadPathStepImagesFolder.mkdirs();
	    }
	    if(uploadPathCompletedImagesFolder.exists() == false){
	    	uploadPathCompletedImagesFolder.mkdirs();
	    }
	     return folderPath;
	
	}
}
