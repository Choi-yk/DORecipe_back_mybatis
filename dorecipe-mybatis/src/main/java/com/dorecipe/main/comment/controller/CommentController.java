package com.dorecipe.main.comment.controller;

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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dorecipe.main.comment.service.CommentService;
import com.dorecipe.main.comment.vo.CommentVO;

import lombok.RequiredArgsConstructor;

//@CrossOrigin(origins="http://localhost:3000")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController 
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	//aplication.properties �뙆�씪�뾽濡쒕뱶 寃쎈줈 媛��졇�삤湲�
	@Value("${part7.upload.path}")
	private String uploadPath;
	
	
	@GetMapping("/delete") // �씠踰ㅽ듃 �궘�젣
	public void Delete(@PathVariable("recipe_num") Integer recipe_num,@PathVariable("comment_num") Integer comment_num) throws Exception {
		commentService.deleteComment(recipe_num,comment_num);
	}
	
	@GetMapping("/list/{recipe_num}")
	public List<CommentVO> selectComment(@PathVariable Integer recipe_num) {
		System.out.println("controller : recipeNum" + recipe_num);
		return commentService.selectComment(recipe_num);
	}
	
//	@PostMapping("/insert/{comment_num}")
//	public void insertComment(CommentVO commentVO,@PathVariable Integer comment_num, @RequestParam(value="comment_image",required = false) MultipartFile[] uploadFiles) throws Exception{
////	public void insertComment(CommentVO commentVO) throws Exception{
//		if(uploadFiles == null) {//�뙆�씪�씠 �뾾�쑝硫� �굹癒몄� ���옣
//			commentService.insertEvent(commentVO,comment_num);
//			return;
//		}
//		fileUpload(commentVO, uploadFiles);
//		System.out.println("---comment insert test");
//		commentService.insertEvent(commentVO,comment_num);
//		System.out.println("comment insert test complete!! "+ commentVO.getComment_content());
//	}
	
	
	@PostMapping("/insert")
	public void insertComment(CommentVO commentVO, @RequestParam(value="comment_image",required = false) MultipartFile[] uploadFiles) throws Exception{
		if(uploadFiles == null) {
			commentService.insertComment(commentVO);
			return;
		}
		fileUpload(commentVO, uploadFiles);
		System.out.println("---comment insert test");
		commentService.insertComment(commentVO);
		System.out.println("comment insert test complete!! "+ commentVO.getComment_content());
	}
	
	//�뙆�씪 �뾽濡쒕뱶
	private CommentVO fileUpload(CommentVO commentVO, MultipartFile[] uploadFiles) {
		//MultipartFile�� �떒嫄대쭔 諛곗뿴濡� �꽕�젙�븯硫� �떎�닔�쓽 �뙆�씪�쓣 諛쏆쓣 �닔�엳�뒿�땲�떎.
		//諛곗뿴�쓣 �솢�슜�븯硫� �룞�떆�뿉 �뿬�윭媛쒖쓽 �뙆�씪 �젙蹂대�� 泥섎━�븷 �닔 �엳�쑝誘�濡� �솕硫댁뿉�꽌 �뿬�윭媛쒖쓽 �뙆�씪�쓣 �룞�떆�뿉 �뾽濡쒕뱶 �븷 �닔 �엳�뒿�땲�떎.
		
		for(MultipartFile uploadFile:uploadFiles) {
			String originalName = uploadFile.getOriginalFilename();
			System.out.println("originalName:"+ originalName);
			String fileName = originalName.substring(originalName.lastIndexOf("//")+1); //留덉�留� //�뮘�쓽 �뙆�씪�씠由꾧��졇�삤湲�
			System.out.println("fileName:"+ fileName);
			
			//�궇吏� �뤃�뜑
	        String folderPath = makeFolder();
	        //UUID unique�뙆�씪紐� 留뚮뱾湲�
	        String uuid = UUID.randomUUID().toString();
	        //���옣�븷 �뙆�씪 �씠由� 以묎컙�뿉 "_"瑜� �씠�슜�븯�뿬 援щ텇
	        String saveCommentName = uploadPath + File.separator 
	        		+ folderPath +File.separator + uuid + "_" + fileName;
	        System.out.println("�쟾泥닿꼍濡�" + saveCommentName);
	        Path saveCommentPath = Paths.get(saveCommentName);
	        //Paths.get() 硫붿꽌�뱶�뒗 �듅�젙 寃쎈줈�쓽 �뙆�씪 �젙蹂대�� 媛��졇�샃�땲�떎.(寃쎈줈 �젙�쓽�븯湲�)
	        
	        //db�뿉 ���옣 �븷 �씠誘몄� 寃쎈줈
	        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
			String comment_path = "/img/comment/" + date + "/" + uuid + "_" + fileName;
			System.out.println("���옣�븳 寃쎈줈"+ comment_path);
			commentVO.setComment_path(comment_path);
	        
	        try{
	        	uploadFile.transferTo(saveCommentPath);
	        } catch (IOException e) {
	             e.printStackTrace();
	        }
		}
		 return commentVO;
	}
	
	//�뤃�뜑 �깮�꽦
	private String makeFolder(){
	  	String str = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
	    //LocalDate瑜� 臾몄옄�뿴濡� �룷硫�
	    String folderPath = str.replace("/", File.separator);
	    File uploadPathFolder = new File(uploadPath, folderPath);
	    if(uploadPathFolder.exists() == false){
	    	uploadPathFolder.mkdirs();
	    }
	    return folderPath;
    }
	
}
