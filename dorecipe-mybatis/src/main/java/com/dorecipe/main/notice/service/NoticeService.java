package com.dorecipe.main.notice.service;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.dorecipe.main.notice.vo.Notice;

public interface NoticeService {
	
	//공지사항 목록 요청
	List<Notice> getList();
	
	//공지사항 상세페이지 요청
	Notice getdetail(int notice_num);
	
	//등록
	int insert(Notice notice);
	
	//수정
	int update(Notice notice);
	
	//삭제
	int delete(int notice_num);
	
	
	
}
