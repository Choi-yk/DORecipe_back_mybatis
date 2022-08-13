package com.dorecipe.main.member.service;

import java.util.List;

import com.dorecipe.main.member.vo.MemberVO;

public interface MemberService {
	public List<MemberVO> listMembers() throws Exception;
	public String getMemberId() throws Exception;
	public void DeleteMember(String member_id) throws Exception;
}