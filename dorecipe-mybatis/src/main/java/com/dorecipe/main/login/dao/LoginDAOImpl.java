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
	
//	@Override
//	public int Login(MemberVO memberVO) throws Exception {
//		return sqlSession.selectOne("mapper.login.memberLogin",memberVO);
//	}
	
//	@Override
//	public MemberVO Login(Map<String, String> map) throws Exception {
//		return sqlSession.selectOne("mapper.login.memberLogin", map);
//	}
	
	@Override
	public MemberVO Login(String member_id) throws Exception {
		return sqlSession.selectOne("mapper.login.memberLogin", member_id);
	}
}
