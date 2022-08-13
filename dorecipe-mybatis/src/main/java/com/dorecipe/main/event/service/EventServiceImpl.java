package com.dorecipe.main.event.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.event.mapper.EventMapper;


@Service
public class EventServiceImpl {

	@Autowired
	EventMapper eventMapper;
	
	public ArrayList<HashMap<String, Object>> findAll(){
		return eventMapper.findAll();
	}
	
}
