package com.dorecipe.main.member.dao;

import java.util.List;

import com.dorecipe.main.member.vo.MemberVO;

public interface MemberDAO {
	// 회원목록 전체 조회
	public List<MemberVO> selectAllMemberList() throws Exception;
	
	// 회원 아이디 조회
	public MemberVO findByMemberId(String id) throws Exception;
	
	// 회원 등록(가입)
	public int insertMember(MemberVO memberVO) throws Exception;
	
	// 회원 삭제(탈퇴)
	public void deleteMember(String id) throws Exception;
	
}