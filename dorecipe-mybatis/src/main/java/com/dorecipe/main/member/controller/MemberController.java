package com.dorecipe.main.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;

import com.dorecipe.main.member.service.MemberService;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;


//@CrossOrigin(origins = "http://localhost:3000") 리액트 기본 포트 번호 3000
@RequiredArgsConstructor
@Controller
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	// 관리자 페이지 - 회원목록 조회
	@RequestMapping("/member")
	public String list(Model model) throws Exception {
		List<MemberVO> membersList = memberService.listMembers();
		
		model.addAttribute("membersList", membersList);
		
		System.out.println("회원 목록 출력 됨~~~~ - Controller");
		
		return "member";
	}
	
	@GetMapping("/delete/{member_id}")
	public String Delete(String member_id) {

		return "redirect:/";
	}
}