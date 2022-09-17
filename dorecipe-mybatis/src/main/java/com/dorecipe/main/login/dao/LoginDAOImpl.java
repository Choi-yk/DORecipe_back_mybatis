package com.dorecipe.main.login.dao;

import java.io.InputStream;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.eclipse.jdt.internal.compiler.batch.Main;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.login.MyParameter;
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

	@Override
	public MemberVO loginTry(String member_id, String member_pwd) throws Exception {
//		 try (InputStream in = Main.class.getResourceAsStream("/mybatis-config.xml")) {
//	            SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
//
//	            try (SqlSession session = factory.openSession()) {
//	                MyParameter param = new MyParameter(member_id, member_pwd);
//
//	                Map<String, Object> result = session.selectOne("sample.mybatis.selectTest", param);
//	                System.out.println(result);
//	                return sqlSession.selectOne("mapper.login.memberLogin",param);
//	            }
//	        }
		return sqlSession.selectOne("mapper.login.memberLogin",member_id);
	}

//	@Override
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		return sqlSession.selectOne("mapper.login.findById", memberVO);
//	}
}
