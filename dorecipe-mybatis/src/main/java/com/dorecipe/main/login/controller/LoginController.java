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

//@CrossOrigin(origins="http://localhost:3000")
//@RestController
@Controller
@RequiredArgsConstructor
//@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
//	MemberVO memberVO;
	
	//멤버 로그인
	@GetMapping("/login") 
	public String login() {		
		return "loginForm";
	}
	
	@PostMapping("/loginexe")
	public String login(@RequestParam(value="member_id",defaultValue="--") String member_id,
						@RequestParam(value="member_pwd",defaultValue="--") String member_pwd,
						Model model) throws Exception {
		String strReturn = "";
		String strMessage = "";
		
		MemberVO memberVO = loginService.Login(member_id);

		System.out.println("!!!!!!!member_id = "+ memberVO.getMember_id());
		System.out.println("!!!!!!!member_pwd = " + memberVO.getMember_pwd());
		
		if(memberVO != null) {
			strReturn = "loginForm";
			strMessage = "아이디가 존재하지 않습니다";
		}else {
			if(!member_pwd.equals(memberVO.getMember_pwd())) {
				strReturn = "loginForm";
				strMessage = "비밀번호가 일치하지 않습니다";
			}
			System.out.println("~~~~~~~~member_id = "+ memberVO.getMember_id());
			System.out.println("~~~~~~~~member_pwd = " + memberVO.getMember_pwd());
			
			strReturn = "successLogin";
			strMessage = "로그인 성공";
		}
		
//		model.addAttribute("message", strMessage);
		
		return strReturn;
		
//			@RequestParam Map<String,String> map, Model model, HttpSession session) throws Exception{
//			
//		
//		if(map.get("member_id") == null || map.get("member_pwd") == null) {
//			model.addAttribute("msg", "아이디 또는 비밀번호를 입력해주세요");
//			return "loginForm";
//		}
//		
//		MemberVO memberVO = loginService.Login(map);
//		
//		if(memberVO != null) {
//			session.setAttribute("memberVO", memberVO);
//			System.out.println("!!!!!!!member_id = "+ memberVO.getMember_id());
//			System.out.println("!!!!!!!member_pwd = " + memberVO.getMember_pwd());
//			return "successLogin";
//		}else {
//			model.addAttribute("msg", "아이디 또는 비밀번호가 올바르지 않습니다.");
//			return "loginForm";
//		}
				
	}
	
//	//로그아웃
//	@GetMapping("/logout")
//	public String logout(HttpServletRequest request) {
//		HttpSession session = request.getSession(false);
//		session.invalidate();
//		
//		return "loginForm";
//	}
	
}
