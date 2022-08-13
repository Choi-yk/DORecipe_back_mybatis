package com.dorecipe.main.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dorecipe.main.member.vo.MemberVO;

// sql 수정??
@Mapper
public interface MemberDAO {
	@Select("select * from member")
	public List<MemberVO> selectAllMemberList() throws Exception;
	
	@Select("select member_id from member where member_id = #{member_id}")
	public String findByMemberId(String id) throws Exception;
	
	@Delete("delete from member where member_id = #{member_id}")
	public void deleteMember(String id) throws Exception;
	//public int insertMember(MemberVO memberVO) throws Exception;
}