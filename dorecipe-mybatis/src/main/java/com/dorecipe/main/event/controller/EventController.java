package com.dorecipe.main.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.event.service.EventService;
import com.dorecipe.main.event.vo.EventVO;

@Controller
@RequestMapping("/event")
public class EventController {

	@Autowired
	private EventService eventService;
	
	@RequestMapping("/list")
	public String EventList(Model model) {
		List<EventVO> eList = eventService.getList();
		model.addAttribute("eList", eList);
		return "event";
	}
	
}
