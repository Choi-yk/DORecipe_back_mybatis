package com.dorecipe.main.member.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.member.vo.MemberVO;

@Repository
public class MemberDAOImpl implements MemberDAO {

	@Autowired
	SqlSession sqlSession;
	
	// 회원 전체 조회
	@Override
	public List<MemberVO> selectAllMemberList() throws Exception {
		List<MemberVO> membersList = null;
		membersList = sqlSession.selectList("mapper.member.selectAllMemberList");
		
		return membersList;
	}

	// 회원 등록(가입)
	@Override
	public int insertMember(MemberVO memberVO) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public MemberVO findByMemberId(String id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	// 회원 삭제(탈퇴)
	@Override
	public void deleteMember(String id) throws Exception {
		// TODO Auto-generated method stub
		
	}

}