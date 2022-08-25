package com.dorecipe.main.event.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.event.vo.EventVO;

@Repository
public class EventDAOImpl implements EventDAO {

	private EventDAO mapper;
	
	@Autowired
	public EventDAOImpl(SqlSession sqlSession) {
		mapper = sqlSession.getMapper(EventDAO.class);
	}
	
	@Override
	public List<EventVO> getList(){
		return mapper.getList();
	}
	
	@Override
	public EventVO getDetail(int event_num) {
		return mapper.getDetail(event_num);
	}
	
	@Override
	public int insertEvent(EventVO eventVO) {
		return mapper.insertEvent(eventVO);
	}
	
	@Override
	public int deleteEvent(int event_num) {
		return mapper.deleteEvent(event_num);
	}
	
	@Override
	public int updateEvent(EventVO eventVO) {
		System.out.println(eventVO + "다오에 옴?");
		return mapper.updateEvent(eventVO);
	}
	
}
