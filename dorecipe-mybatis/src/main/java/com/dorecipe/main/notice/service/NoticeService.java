package com.dorecipe.main.notice.service;

import java.util.List;

import com.dorecipe.main.notice.vo.Notice;

public interface NoticeService {
	
	List<Notice> getList();
	
	Notice get(int id);
}
