package com.dorecipe.main.login.service;


import java.util.Map;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginService {

	public MemberVO Login(MemberVO memberVO) throws Exception;
	
}
