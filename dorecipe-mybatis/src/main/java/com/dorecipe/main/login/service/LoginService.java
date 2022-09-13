package com.dorecipe.main.login.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dorecipe.main.login.dao.LoginDAO;

import lombok.RequiredArgsConstructor;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LoginService {
	
	//DAO 연결
	private final LoginDAO loginDAO;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;

	


//	@Override
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		
//		return loginDAO.findById(memberVO);
//	}
	
}
