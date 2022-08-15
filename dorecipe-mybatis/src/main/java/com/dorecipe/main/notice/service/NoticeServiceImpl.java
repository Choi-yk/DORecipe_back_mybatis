package com.dorecipe.main.notice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.dorecipe.main.notice.dao.NoticeDAO;
import com.dorecipe.main.notice.vo.Notice;

//구현클래스
@Service	//component,service,controller,repository,config 모두 객체화 시키는 어노테이션!
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired	//참조해서 쓸게!
	private NoticeDAO noticeDao;
	
	//목록 보기
	@Override
	public List<Notice> getList() {

		List<Notice> list = noticeDao.getList();
		
		return list;
	}
	
	//상세페이지
	@Override
	public Notice getdetail(int notice_num) {
		
		Notice notice = noticeDao.getdetail(notice_num);
		
		return notice;
	}

	@Override
	public int insert(Notice notice) {
		// TODO Auto-generated method stub
		return noticeDao.insertNotice(notice);
	}

	@Override
	public int update(Notice notice) {
		// TODO Auto-generated method stub
		return noticeDao.updateNotice(notice);
	}

	@Override
	public int delete(int notice_num) {
		// TODO Auto-generated method stub
		return noticeDao.deleteNotice(notice_num);
	}


	
	
}
