package com.dorecipe.main.notice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.notice.dao.NoticeDAO;
import com.dorecipe.main.notice.vo.Notice;

//구현클래스
@Service	//component,service,controller,repository,config 모두 객체화 시키는 어노테이션!
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired	//참조해서 쓸게!
	private NoticeDAO noticeDao;
	
	@Override
	public List<Notice> getList() {

		List<Notice> list = noticeDao.getList();
		
		return list;
	}
	
	@Override
	public Notice get(int id) {
		
		Notice notice = noticeDao.get(id);
		
		return notice;
	}
}
