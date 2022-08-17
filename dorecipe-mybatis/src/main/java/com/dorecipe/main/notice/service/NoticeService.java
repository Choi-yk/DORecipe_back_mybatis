package com.dorecipe.main.notice.service;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.ui.Model;

import com.dorecipe.main.notice.vo.Notice;

public interface NoticeService {
	
	//공지사항 목록 요청
	List<Notice> getList();
	
	//공지사항 상세페이지 요청
//	Notice getdetail(int notice_num);
	
	//등록
	void insert(Notice notice) throws Exception;
	
	//수정
	void update(int notice_num,Notice notice) throws Exception;
	
	//삭제
	void delete(int notice_num) throws Exception;
	
	
	
}
