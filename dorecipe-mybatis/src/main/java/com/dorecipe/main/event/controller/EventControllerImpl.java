package com.dorecipe.main.event.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dorecipe.main.event.service.EventServiceImpl;

@RestController
@RequestMapping(value = "/api/v1/app/findAll")
public class EventControllerImpl {
	
	@Autowired
	EventServiceImpl eventServiceImpl;
	
	@RequestMapping(value = "findAll", method = RequestMethod.POST)
	public ResponseEntity<?> findAll(){
		ResponseDTO responseDTO = new ResponseDTO();
		responseDTO.setResultCode("S0001");
		responseDTO.setRes(eventServiceImpl.findAll());
		return new ResponseEntity<>(responseDTO, HttpStatus.OK);
	}
	
}
