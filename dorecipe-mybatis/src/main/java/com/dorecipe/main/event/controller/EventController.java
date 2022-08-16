package com.dorecipe.main.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@RequestMapping("/detail/{event_num}")
	public String detail(Model model, @PathVariable("event_num") Integer event_num) {
		System.out.println("----------------eventController event_num : " + event_num);
		EventVO eventVO = eventService.getDetail(event_num);
		model.addAttribute("eventVO",eventVO);
		return "eventDetail";
	}
	
}
