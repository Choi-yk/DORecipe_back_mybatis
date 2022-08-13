package com.dorecipe.main.event.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dorecipe.main.event.vo.EventVO;

@Mapper
public interface EventDAO {

	@Select("select * from event")
	List<EventVO> getList();
	
}
