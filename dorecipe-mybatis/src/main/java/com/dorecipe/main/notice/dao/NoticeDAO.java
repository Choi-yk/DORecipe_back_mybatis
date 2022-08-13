package com.dorecipe.main.notice.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dorecipe.main.notice.vo.Notice;

@Mapper	//mybatis에서 제공하는 것. 객체화 시킴
public interface NoticeDAO {

	@Select("select notice_num,member_id,notice_title,notice_content,notice_creDate from notice")
	List<Notice> getList();
	
	Notice get(int id);

}
