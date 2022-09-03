package com.dorecipe.main.login.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dorecipe.main.login.service.LoginService;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@RestController
//@Controller
@RequiredArgsConstructor
//@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	
	//멤버 로그인
	@GetMapping("/login") 
	public String login() {		
		return "loginForm";
	}
	
	@PostMapping("/login")
	public String login(MemberVO memberVO, HttpServletRequest req, RedirectAttributes rttr) throws Exception{
			
			HttpSession session = req.getSession();
			memberVO = loginService.Login(memberVO);
			
			if(memberVO == null) {
				session.setAttribute("member",null);
				rttr.addFlashAttribute("msg",false);
				System.out.println("memberVO 객체가 null..............");
				
				return "loginForm";
				
			}else {
				session.setAttribute("member", memberVO);
				System.out.println("memberVO 객체에 값 들어감!!!!!!!!!!!");
				System.out.println("!!!!!!!member_id = "+ memberVO.getMember_id());
				System.out.println("!!!!!!!member_pwd = " + memberVO.getMember_pwd());
				
				return "redirect:/";
			}

	}
	
//	//로그아웃
//	@GetMapping("/logout")
//	public String logout(HttpServletRequest request) {
//		HttpSession session = request.getSession(false);
//		session.invalidate();
//		
//		return "loginForm";
//	}
	
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		return loginService.findById(memberVO);
//	}
}
