package com.dorecipe.main.event.mapper;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface EventMapper {

	ArrayList<HashMap<String, Object>> findAll();
	
}
