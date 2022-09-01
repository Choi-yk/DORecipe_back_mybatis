package com.dorecipe.main.login.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.member.vo.MemberVO;

@Repository
public class LoginDAOImpl implements LoginDAO {

	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int Login(MemberVO memberVO) throws Exception {
		return sqlSession.selectOne("mapper.login.Login");
	}

	
	
}
