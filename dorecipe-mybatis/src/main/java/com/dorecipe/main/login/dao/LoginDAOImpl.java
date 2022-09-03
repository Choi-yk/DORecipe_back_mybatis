package com.dorecipe.main.login.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.member.vo.MemberVO;

@Repository
public class LoginDAOImpl implements LoginDAO{
	//Mapper
	
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public MemberVO Login(MemberVO memberVO) throws Exception {
		System.out.println("@@@@@ DAO 멤버 아이디 " + memberVO.getMember_id());
		System.out.println("@@@@@ DAO 멤버 비밀번호 " + memberVO.getMember_pwd());
		
		return sqlSession.selectOne("mapper.login.memberLogin",memberVO);
	}

//	@Override
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		return sqlSession.selectOne("mapper.login.findById", memberVO);
//	}
}
