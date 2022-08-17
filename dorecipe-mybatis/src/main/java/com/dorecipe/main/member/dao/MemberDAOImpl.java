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
		
		System.out.println("MemberDAO - selectAllMemberList");
		
		return membersList;
	}
	
	// 회원 정보 수정
	@Override
	public int updateMember(MemberVO memberVO) throws Exception {
		return sqlSession.update("mapper.member.updateMember", memberVO);
	}

	// 회원 등록(가입)
	@Override
	public int insertMember(MemberVO memberVO) throws Exception {

		return sqlSession.insert("mapper.member.insertMember", memberVO);
	}

	// 회원 삭제(탈퇴)
	@Override
	public int deleteMember(String id) throws Exception {
		return sqlSession.delete("mapper.member.deleteMember", id);
	}
	
	// 회원 상세

}