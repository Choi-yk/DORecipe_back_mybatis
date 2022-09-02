package com.dorecipe.main.login.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.login.dao.LoginDAO;
import com.dorecipe.main.member.vo.MemberVO;


@Service
public class LoginServiceImpl implements LoginService{
	//DAO와 Controller 사이에 들어오는 Service
	
	//DAO 연결
	@Autowired
	private LoginDAO loginDAO;	
	
//	@Override
//	public int Login(MemberVO memberVO) throws Exception {
//		return loginDAO.Login(memberVO);
//	}
	
//	@Override
//	public MemberVO Login(Map<String, String> map) throws Exception {
//		return loginDAO.Login(map);
//	}
	
	@Override
	public MemberVO Login(String member_id) throws Exception {
		return loginDAO.Login(member_id);
	}
	
}
