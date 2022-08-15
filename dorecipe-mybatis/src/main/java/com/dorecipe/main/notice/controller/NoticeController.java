package com.dorecipe.main.notice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.notice.service.NoticeService;
import com.dorecipe.main.notice.vo.Notice;

import lombok.RequiredArgsConstructor;

@RequestMapping("/notice")
@RequiredArgsConstructor	//생성자 주입을 위한.
@Controller
public class NoticeController {
	
	@Autowired
	private NoticeService service;	//interface자료형
	
	//공지사항 전체 목록
	@RequestMapping("/list")
	public String list(Model model) {
		List<Notice> list = service.getList();
		
		model.addAttribute("list",list);
		
		System.out.println(list);
		
	    return "notice";
	}
	
	//공지사항 상세 조회
	@RequestMapping("/detail/{notice_num}")
	public String detail(int notice_num) {
	   Notice notice = service.getdetail(notice_num);
	   
	   System.out.println(notice);
	   
	   return "notice";
	}

}
