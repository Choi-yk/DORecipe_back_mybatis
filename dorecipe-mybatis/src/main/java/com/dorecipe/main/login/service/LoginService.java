package com.dorecipe.main.login.service;


import java.util.Map;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginService {

	public MemberVO Login(MemberVO memberVO) throws Exception;

	public MemberVO loginTry(String member_id, String member_pwd);
	
//	public MemberVO findById(MemberVO memberVO) throws Exception;
}
