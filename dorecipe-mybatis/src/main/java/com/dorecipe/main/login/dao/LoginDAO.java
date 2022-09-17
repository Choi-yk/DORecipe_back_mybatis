//package com.dorecipe.main.login.dao;
//
//import java.util.Optional;
//
//import org.apache.ibatis.session.SqlSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//<<<<<<< HEAD
//import com.dorecipe.main.member.vo.MemberVO;
//
//public interface LoginDAO {
//
//	public MemberVO Login(MemberVO memberVO) throws Exception;
//	public MemberVO loginTry(String username, String password) throws Exception;
//=======
//@Repository
//public class LoginDAO {
//	//Mapper
//>>>>>>> 6468cbe61904082926b85971c0be5a38ad647588
//	
//	@Autowired
//	SqlSession sqlSession;
//	
////	@Override
////	public Optional login(String member_id, String member_pwd) throws Exception {
////		return sqlSession.selectOne("mapper.login.memberLogin",member_id, member_pwd);
////	}
//
////	@Override
////	public MemberVO findById(MemberVO memberVO) throws Exception {
////		return sqlSession.selectOne("mapper.login.findById", memberVO);
////	}
//}
