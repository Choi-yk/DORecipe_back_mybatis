package com.dorecipe.main.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.event.service.EventService;
import com.dorecipe.main.event.vo.EventVO;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/event")
@RequiredArgsConstructor
public class EventController {

	@Autowired
	private EventService eventService;
	
	@RequestMapping("/list") // 이벤트 전체 조회
	public String EventList(Model model) {
		List<EventVO> eList = eventService.getList();
		model.addAttribute("eList", eList);
		return "event";
	}
	
	@RequestMapping("/detail/{event_num}") //이벤트 상세 조회
	public String detail(Model model, @PathVariable("event_num") Integer event_num) {
		System.out.println("----------------eventController event_num : " + event_num);
		EventVO eventVO = eventService.getDetail(event_num);
		model.addAttribute("eventVO",eventVO);
		return "eventDetail";
	}
	
	@PostMapping("/insert") // 이벤트 삽입
	public String insertEvent(EventVO eventVO) {
		eventService.insertEvent(eventVO);
		return "redirect:/event/list";
	}
	
	@GetMapping("/delete/{event_num}") // 이벤트 삭제
	public String Delete(@PathVariable("event_num") Integer event_num) throws Exception {
		eventService.deleteEvent(event_num);
		return "redirect:/event/list";	
	}
	
	@PostMapping("/modify") // 이벤트 수정
	public String updateEvent(EventVO eventVO) {
		eventService.updateEvent(eventVO);
		System.out.println("수정------------------------------" + eventVO);
		return "redirect:/event/list";
	}
	
	@GetMapping("/modify/{event_num}") // eventForm.xml로 addAttribute
	public String updateEvent2(Model model,
							   @PathVariable Integer event_num) {
		EventVO eventVO = eventService.getDetail(event_num);
		model.addAttribute("eventVO",eventVO);
		return "eventForm";
	}
	
	
}
