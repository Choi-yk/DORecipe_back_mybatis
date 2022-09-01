package com.dorecipe.main.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.login.dao.LoginDAO;
import com.dorecipe.main.member.vo.MemberVO;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginDAO loginDAO;

	@Override
	public int Login(MemberVO memberVO) throws Exception {
		return loginDAO.Login(memberVO);
	}
	
}
