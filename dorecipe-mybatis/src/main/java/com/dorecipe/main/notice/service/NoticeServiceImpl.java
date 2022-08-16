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
	private NoticeDAO noticeDao;	//DAO 객체를 주입 받는 곳
	
	//목록 보기
	@Override
	public List<Notice> getList() {

		List<Notice> list = noticeDao.getList();
		
		return list;
	}
	
	//상세페이지
//	@Override
//	public Notice getdetail(int notice_num) {
//		
//		Notice notice = noticeDao.getdetail(notice_num);
//		
//		return notice;
//	}

	//등록
//	@Override
//	public Notice insert(Notice notice) throws Exception{
//		// TODO Auto-generated method stub
//		List<Notice> list = noticeDao.insertNotice(notice);
//		return notice;
//	}

	//수정
	@Override
	public void update(Notice notice) throws Exception{
		noticeDao.updateNotice(notice);
	}

	//삭제
	@Override
	public void delete(int notice_num) throws Exception{
		noticeDao.deleteNotice(notice_num);
	}


	
	
}
