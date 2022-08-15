package com.dorecipe.main.notice.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.notice.vo.Notice;

//구현클래스
@Repository
public class NoticeDAOImpl implements NoticeDAO{
	
	private NoticeDAO mapper;
	
	@Autowired
	public NoticeDAOImpl(SqlSession sqlSession) {
		mapper = sqlSession.getMapper(NoticeDAO.class);	//이 과정은 모든 함수마다 반복되니까 객체로 따로 만들어둠
	}
	
	//공지사항 목록 리스트
	@Override
	public List<Notice> getList() {
		// TODO Auto-generated method stub
		return mapper.getList();
	}

	@Override
	public Notice getdetail(int notice_num) {
		return mapper.getdetail(notice_num);
	}

	@Override
	public int insertNotice(Notice notice) {
		return mapper.insertNotice(notice);
	}

	@Override
	public int updateNotice(Notice notice) {
		return mapper.updateNotice(notice);
	}

	@Override
	public int deleteNotice(int notice_num) {
		return mapper.deleteNotice(notice_num);
	}

	
}
