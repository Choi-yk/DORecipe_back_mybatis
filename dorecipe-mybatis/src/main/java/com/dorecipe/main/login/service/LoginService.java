package com.dorecipe.main.login.service;

import com.dorecipe.main.member.vo.MemberVO;

public interface LoginService {
	public int Login(MemberVO memberVO) throws Exception;
}
