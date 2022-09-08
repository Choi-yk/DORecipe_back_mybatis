package com.dorecipe.main.login.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dorecipe.main.login.service.LoginService;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@RestController	//responsebody + controller = json형태로 객체데이터 반환, restAPI
//@Controller
@RequiredArgsConstructor
//@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	
	//멤버 로그인
//	@GetMapping("/login") 
//	public String login() {		
//		return "loginForm";
//	}
	
	//jwt test///////////////////////////////
	
//	@PostMapping("/test")
//	public String test() {
//	    return "success";
//	}
//	
//	@PostMapping("/login")
////	public TokenInfo login(@RequestBody MemberLoginRequest memberLoginRequest) throws Exception{	
//	public TokenInfo login(@RequestBody HashMap<String,String> requestJsonHashMap) throws Exception{	
//				
//		System.out.println("%%%%%member_id = "+requestJsonHashMap.get("memberId"));
//		System.out.println("%%%%%member_Pwd = "+requestJsonHashMap.get("memberPwd"));
//		
//		MemberVO memberVO = new MemberVO();
//		
//		memberVO.setMember_id(requestJsonHashMap.get("memberId"));
//		memberVO.setMember_pwd(requestJsonHashMap.get("memberPwd"));
//
////		String memberId = memberLoginRequest.getMember_id();
////		String memberPwd = memberLoginRequest.getMember_pwd();
//		
//		TokenInfo tokenInfo = memberService.login(memberVO.getMember_id(),memberVO.getMember_pwd());
//		System.out.println("TokenInfo tokenInfo => " + tokenInfo);
////		System.out.println("memberId=>"+ memberId);
////		System.out.println("memberPwd=>"+memberPwd);
//		
//		if(tokenInfo == null) {
//			System.out.println("memberVO 객체가 null..............");
//		}else {	//로그인 성공햇을 때
//			System.out.println("memberVO 객체에 값 들어감!!!!!!!!!!!");
////			System.out.println("!!!!!!!member_id = "+ memberVO.getMember_id());
////			System.out.println("!!!!!!!member_pwd = " + memberVO.getMember_pwd());
//
//		}
////		return memberVO;
//		return tokenInfo;
//	}
	
	//jwt test END///////////////////////////////
	
	
	//////////////jwt test 이전 mapping ///////////////////////////
	@PostMapping("/login")
	//public String login(MemberVO memberVO, HttpServletRequest req, RedirectAttributes rttr) throws Exception{
//	public String login(@RequestBody HashMap<String,String> requestJsonHashMap,HttpServletResponse res) throws Exception{	
	public MemberVO login(@RequestBody HashMap<String,String> requestJsonHashMap) throws Exception{	
			
		//HashMap<String, Object> rtnMap = new HashMap<String, Object>();
		
		System.out.println("%%%%%member_id = "+requestJsonHashMap.get("memberId"));
		System.out.println("%%%%%member_Pwd = "+requestJsonHashMap.get("memberPwd"));
		
		MemberVO memberVO = new MemberVO();
		
		memberVO.setMember_id(requestJsonHashMap.get("memberId"));
		memberVO.setMember_pwd(requestJsonHashMap.get("memberPwd"));
		
		//HttpSession session = req.getSession();
			//System.out.println("%%%%%" + memberVO);
			//System.out.println("%%%%%" + req.getParameter("memberId"));
			
			
			memberVO = loginService.Login(memberVO);
			
			
			if(memberVO == null) {
//				session.setAttribute("member",null);
//				rttr.addFlashAttribute("msg",false);
				System.out.println("memberVO 객체가 null..............");
				
//				return "redirect:/login";				
			}else {	//로그인 성공햇을 때
//				session.setAttribute("member", memberVO);
				System.out.println("memberVO 객체에 값 들어감!!!!!!!!!!!");
				System.out.println("!!!!!!!member_id = "+ memberVO.getMember_id());
				System.out.println("!!!!!!!member_pwd = " + memberVO.getMember_pwd());
				
//				return "redirect:/";

			}
		return memberVO;
	}
	
	@RequestMapping(path="/login", method =RequestMethod.GET)
	public MemberVO login(MemberVO memberVO) throws Exception {
		return loginService.Login(memberVO);
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
