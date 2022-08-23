package com.dorecipe.main.member.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
/*	
	@Override
	public Optional<MemberVO> findById(String member_id) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("mapper.member.findById", member_id);
	}
*/	
	// 회원 정보 수정
	@Override
	public int updateMember(String id, MemberVO memberVO) throws Exception {
		return sqlSession.update("mapper.member.updateMember", id);
	}

	// 회원 등록(가입)
	@Override
	public int insertMember(MemberVO memberVO) throws Exception {
		/*
		memberVO.setMember_id(null);
		memberVO.setMember_pwd(null);
		memberVO.setMember_name(null);
		memberVO.setMember_email(null);
		memberVO.setMember_gender(null);
		memberVO.setMember_birth(null);
		memberVO.setMember_phone(null);
		memberVO.setMember_imagePath(null);
		memberVO.setMember_joinDate(null);
		memberVO.setMember_like(0);
		memberVO.setMember_role(null);
		*/
		System.out.println("MemberDAO - insertMember");
		
		return sqlSession.insert("mapper.member.insertMember", memberVO);
	}

	// 회원 삭제(탈퇴)
	@Override
	public int deleteMember(String id) throws Exception {
		System.out.println("MemberDAO - deleteMember");
		
		return sqlSession.delete("mapper.member.deleteMember", id);
	}
	// 회원 상세
	@Override
	public List<MemberVO> selectAllMemberDetail(String id) throws Exception {
		List<MemberVO> memberDetailList = null;
		memberDetailList = sqlSession.selectList("mapper.member.selectAllMemberDetail",id);
		
		System.out.println("MemberDAO - selectAllMemberDetail");
		
		return memberDetailList;
	}
	
	

}