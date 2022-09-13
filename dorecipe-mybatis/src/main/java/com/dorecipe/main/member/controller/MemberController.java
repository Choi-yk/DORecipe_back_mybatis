package com.dorecipe.main.member.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.dorecipe.main.member.dao.MemberDAO;
import com.dorecipe.main.member.service.MemberService;
import com.dorecipe.main.member.vo.MemberVO;
//import com.dorecipe.main.storage.StorageService;

import lombok.RequiredArgsConstructor;


@CrossOrigin(origins = "http://localhost:3000") //리액트 기본 포트 번호 3000
@RequestMapping("/member")
@RequiredArgsConstructor
@RestController //responsebody + controller = json형태로 객체데이터 반환, restAPI
public class MemberController {

	@Autowired
	private MemberService memberService;
	
//	private StorageService storageService;
	
//	@Autowired	//생성자 주입
//	public MemberController(MemberService memberService, StorageService storageService) {
//		this.memberService = memberService;
//		this.storageService= storageService;
//	}
//	
	// 관리자 페이지 - 회원목록 조회
	@RequestMapping("/list")
	public String list(Model model) throws Exception {
		List<MemberVO> membersList = memberService.listMembers();
		
		model.addAttribute("membersList", membersList);
		
		System.out.println("회원 목록 출력 됨~~~~ - Controller");
		
		return "membersList";
	}
	
	@RequestMapping(path="/list", method =RequestMethod.GET)
	public List<MemberVO> listMembers() throws Exception {
		return memberService.listMembers();
	}
	
		
	// 회원 정보 수정
	@GetMapping("/update/{member_id}")
	public String Update(@PathVariable("member_id") String member_id, Model model) throws Exception {
	
		MemberVO memberVO = memberService.listMemberDetails(member_id);
		model.addAttribute("member",memberVO);
		return "member_update_form";
//		return "member_form";
		
	}
	
	@PostMapping("/update")
//	public String Update(@PathVariable("member_id") String member_id, MemberVO member) throws Exception {
		public String Update(String member_id, MemberVO memberVO) throws Exception {
		
		memberService.ModifyMember(memberVO);
		System.out.println("수정됨");
		return "redirect:/member/list";
		
	}
		
	
	
	// 회원 등록(가입)
//	@GetMapping("/join")
//	public String Join() throws Exception {
//	
//		return "member_form";
//	}
	
	
	
	@PostMapping(value="/uploadFile")
	public ResponseEntity<String> uploadFile(MultipartFile myFile ) throws IllegalStateException, IOException {
		
		if(!myFile.isEmpty()) {
			System.out.printf("file org name = {}", myFile.getOriginalFilename());
			System.out.printf("file content type = {}", myFile.getContentType());
			myFile.transferTo(new File(myFile.getOriginalFilename()));
		}

		return new ResponseEntity<>("",HttpStatus.OK);

	}
	
	@PostMapping(value="upload")
	public ResponseEntity<String> upload(MultipartFile file) throws IllegalStateException, IOException {
//		storageService.store(file);
		return new ResponseEntity<>("",HttpStatus.OK);
	}
	
	
//    @GetMapping(value="download")
//    public ResponseEntity<Resource> serveFile(@RequestParam(value="filename") String filename) {

//        Resource file = storageService.loadAsResource(filename);
//        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
//                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//    }
	
    
//    @GetMapping("fileList")
//    public ResponseEntity<List<MemberService>> getListFiles() {
//        List<MemberService> fileInfos = storageService.loadAll().map(path ->{
//   
//              String filename = path.getFileName().toString();
//              data.setFilename(filename);
//              data.setUrl(MvcUriComponentsBuilder.fromMethodName(InfoController.class,
//                        "serveFile", filename).build().toString());
//              try {
//                data.setSize(Files.size(path));
//            } catch (IOException e) {
//                System.out.println(e.getMessage());
//            }
//              return data;
//          })
//          .collect(Collectors.toList());
//
//        return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
//    }
//    
    
	
	//중복 아이디 체크
	@PostMapping("/join/checkDuplicateId")
	public MemberVO checkDuplicateId(String member_id) throws Exception{
		System.out.println("duplicate~~ :"+memberService.CheckDuplicateId(member_id));	
		return memberService.CheckDuplicateId(member_id);
	}
	

    
	//원본///////////////////////////////////////////
	@PostMapping("/join/new")
	public String Join(MemberVO memberVO /*Model model, HttpServletRequest request*/) throws Exception {
		//MemberVO memberVO = (MemberVO) request.getParameterMap();
		
		memberService.JoinMember(memberVO);
		
//		System.out.println("등록됨 - Controller");
		
		return "redirect:/member/list";
		//return memberService.JoinMember(memberVO);
	}
	//원본///////////////////////////////////////////
	// 회원 삭제(탈퇴)
	@GetMapping("/delete/{member_id}")
	public String Delete(@PathVariable("member_id") String member_id) throws Exception {
		memberService.DeleteMember(member_id);
		
//		System.out.println("삭제됨 - Controller");
		
		return "redirect:/member/list";
	}
}