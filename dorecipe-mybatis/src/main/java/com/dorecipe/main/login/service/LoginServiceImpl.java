package com.dorecipe.main.login.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.login.dao.LoginDAO;
import com.dorecipe.main.member.vo.MemberVO;


@Service
public class LoginServiceImpl implements LoginService{
	
	//DAO 연결
	@Autowired
	private LoginDAO loginDAO;	

	
	@Override
	public MemberVO Login(MemberVO memberVO) throws Exception {
		System.out.println("!!!!! service 멤버 아이디 " + memberVO.getMember_id());
		System.out.println("!!!!! service 멤버 비밀번호 " + memberVO.getMember_pwd());
		return loginDAO.Login(memberVO);
	}
	
}
