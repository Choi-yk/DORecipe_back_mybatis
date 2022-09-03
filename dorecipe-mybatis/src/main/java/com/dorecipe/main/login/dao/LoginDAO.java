package com.dorecipe.main.login.dao;


import java.util.Map;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginDAO {

	public MemberVO Login(MemberVO memberVO) throws Exception;
	
//	public MemberVO findById(MemberVO memberVO) throws Exception;
}
