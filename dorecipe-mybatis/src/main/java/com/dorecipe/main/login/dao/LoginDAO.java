package com.dorecipe.main.login.dao;


import java.util.Map;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginDAO {

//	public int Login(MemberVO memberVO) throws Exception;

//	public MemberVO Login(Map<String, String> map) throws Exception;

	public MemberVO Login(String member_id) throws Exception;

}
