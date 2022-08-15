package com.dorecipe.main.notice.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.dorecipe.main.notice.vo.Notice;

//구현클래스
public class NoticeDAOImpl implements NoticeDAO{

	@Override
	public List<Notice> getList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	
	public Notice getdetail(int notice_num) {
		// TODO Auto-generated method stub
		return null;
	}

//	@Override
//	public List selectAllNotice() throws DataAccessException {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
//	private JdbcTemplate jdbcTemplate; // spring과 jdbc의 연동 클래스
//	
//	@Override
//	public List selectAllNotice() throws DataAccessException{
//		String query = "select * from notice order by notice_num desc";
//		List noticeList = new ArrayList(); // 쿼리문의 데이터가 오기 전에 담을 리스트 자리 준비하기
//		
//		// RowMapper는 interface인데 interface는 new할 수 없으니까 바로 익명현구현클래스로 만듦
//		noticeList = this.jdbcTemplate.query(query, new RowMapper() {
//			@Override
//			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
//				Notice notice = new Notice(); // 자료를 임시로 담을 수 있는 그릇 역할
//				notice.setNotice_num(rs.getInt("notice_num"));
//				notice.setMember_id(rs.getString("member_id"));
//				notice.setNotice_title(rs.getString("notice_title"));
//				notice.setNotice_content(rs.getString("notice_content"));
//				notice.setNotice_creDate(rs.getDate("notice_creDate"));
//				return notice;
//			}
//		});
//		return noticeList;
//	}
	
}
