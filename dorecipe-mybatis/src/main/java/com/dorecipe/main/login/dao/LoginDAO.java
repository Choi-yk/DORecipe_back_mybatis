package com.dorecipe.main.login.dao;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginDAO {
	public int Login(MemberVO memberVO) throws Exception;
}
