package com.dorecipe.main.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.dorecipe.main.member.dao.MemberDAO;
import com.dorecipe.main.member.vo.MemberVO;

@Service
//@Transactional(propagation = Propagation.REQUIRED)
public class MemberServiceImpl implements MemberService {

	//@Autowired
	//private MemberMapper memberMapper;
	
	@Autowired
	MemberDAO memberDAO;
	
	@Override
	public List<MemberVO> listMembers() throws Exception {
		List<MemberVO> membersList = null;
		membersList = memberDAO.selectAllMemberList();
		
		System.out.println("DAO 주입 완 - sercvice");
		
		return membersList;
	}

	@Override
	public String getMemberId() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void DeleteMember(String member_id) throws Exception {
		memberDAO.deleteMember(member_id);	
	}
}