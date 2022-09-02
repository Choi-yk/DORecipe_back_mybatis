package com.dorecipe.main.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dorecipe.main.login.service.LoginService;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;

//@CrossOrigin(origins="http://localhost:3000")   //react연동 -> 주석 해제
@RequiredArgsConstructor
//@RequestMapping("/login")
@Controller
//@RestController	//react연동 -> 주석 해제
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@GetMapping("/login")
	public String Login() {
		return "loginForm";
	}
	
	@PostMapping("/login")
	public String Login(@RequestParam("member_id") String member_id, @RequestParam("member_pwd") String member_pwd)
		throws Exception
	{
		String path = "";
		
		MemberVO memberVO = new MemberVO();
		
		memberVO.setMember_id(member_id);
		memberVO.setMember_pwd(member_pwd);
		
		int result = loginService.Login(memberVO);
		
		if(result == 1) {
			path = "redirect:/member/list";
		} 
		else {
			path = "loginForm";
		}
		 
		return path;
	}
	
}
