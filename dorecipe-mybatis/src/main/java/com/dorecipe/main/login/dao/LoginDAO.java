package com.dorecipe.main.login.dao;

import java.util.Optional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDAO {
	//Mapper
	
	@Autowired
	SqlSession sqlSession;
	
//	@Override
//	public Optional login(String member_id, String member_pwd) throws Exception {
//		return sqlSession.selectOne("mapper.login.memberLogin",member_id, member_pwd);
//	}

//	@Override
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		return sqlSession.selectOne("mapper.login.findById", memberVO);
//	}
}
