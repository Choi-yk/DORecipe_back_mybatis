package com.dorecipe.main.member.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;

import com.dorecipe.main.member.service.MemberService;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;


//@CrossOrigin(origins = "http://localhost:3000") 리액트 기본 포트 번호 3000
@RequestMapping("/member")
@RequiredArgsConstructor
@Controller
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	// 관리자 페이지 - 회원목록 조회
	@RequestMapping("/list")
	public String list(Model model) throws Exception {
		List<MemberVO> membersList = memberService.listMembers();
		
		model.addAttribute("membersList", membersList);
		
		System.out.println("회원 목록 출력 됨~~~~ - Controller");
		
		return "member_list";
	}
	
	// 회원 정보 수정
	public String Update(String id, MemberVO memberVO) {
		return null;
	}
	
	// 회원 등록(가입)
	@GetMapping("/join")
	public String Join() throws Exception {
		return "member_form";
	}
	
	@PostMapping("/join")
	public String Join(MemberVO memberVO /*Model model, HttpServletRequest request*/) throws Exception {
		//MemberVO memberVO = (MemberVO) request.getParameterMap();
		
		memberService.JoinMember(memberVO);
		
		System.out.println("등록됨 - Controller");
		
		return "redirect:/member/list";
		//return memberService.JoinMember(memberVO);
	}
	
	// 회원 삭제(탈퇴)
	@GetMapping("/delete/{member_id}")
	public String Delete(@PathVariable("member_id") String member_id) throws Exception {
		memberService.DeleteMember(member_id);
		
		System.out.println("삭제됨 - Controller");
		
		return "redirect:/member/list";
	}
}