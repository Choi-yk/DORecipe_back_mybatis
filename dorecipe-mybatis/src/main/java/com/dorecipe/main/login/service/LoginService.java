package com.dorecipe.main.login.service;


import java.util.Map;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginService {

	public MemberVO Login(String member_id) throws Exception;

//	public int Login(MemberVO memberVO) throws Exception;

//	public MemberVO Login(Map<String, String> map) throws Exception;
	
}
