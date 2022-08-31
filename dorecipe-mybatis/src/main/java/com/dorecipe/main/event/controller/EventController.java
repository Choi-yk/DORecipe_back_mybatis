package com.dorecipe.main.event.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dorecipe.main.event.service.EventService;
import com.dorecipe.main.event.vo.EventVO;
import com.dorecipe.main.file.dto.FileDto;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/event")
@RequiredArgsConstructor
public class EventController {

	//react 연동
	
	@Autowired
	private EventService eventService;
	
	
	@RequestMapping(path="/list",method = RequestMethod.GET)
	public List<EventVO> getEvent(){ //이벤트 전체 조회
		return eventService.getList();
	}
	
	@GetMapping("/detail/{event_num}") //이벤트 상세 조회
	public EventVO detail(@PathVariable("event_num") Integer event_num) {
		return eventService.getDetail(event_num);
	}
	
	@GetMapping("/delete/{event_num}") // 이벤트 삭제
	public void Delete(@PathVariable("event_num") Integer event_num) throws Exception {
		eventService.deleteEvent(event_num);
	}
	
	
	@PostMapping("/insert") // 이벤트 삽입
	public void insertEvent(@RequestParam(value = "event_image", required = false) MultipartFile[] eventFile,
							EventVO eventVO) throws Exception {
		
		List<FileDto> list = new ArrayList<>();
		
		for(MultipartFile file : eventFile) {
			if(!file.isEmpty()) {
											  //uuid를 이용해 unique파일 이름 만들기
				FileDto dto = new FileDto(    UUID.randomUUID().toString(),
											  file.getOriginalFilename(),
											  file.getContentType()       );
				
				list.add(dto);
				File newFileName = new File(dto.getUuid() + "_" + dto.getFileName());
				
				// 전달된 내용을 실제 물리적인 파일로 저장 - application.properties에 설정한 c:\\dorecipe\\upload에 저장
				file.transferTo(newFileName);
				
				eventVO.setEvent_path(newFileName.getName());//mysql event_path에 newFileName저장
			}
		}
		
		//이벤트 삽입
		eventService.insertEvent(eventVO);
	}

	
	@PostMapping("/update") // 이벤트 수정
	public void updateEvent(EventVO eventVO) {
		eventService.updateEvent(eventVO);
	}
	
	
}
