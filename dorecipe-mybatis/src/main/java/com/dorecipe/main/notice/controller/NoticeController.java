package com.dorecipe.main.notice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.notice.dao.NoticeDAO;
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
//	@RequestMapping("/detail/{notice_num}")
//	public String detail(Model model, @PathVariable("notice_num") Integer notice_num) throws Exception {
//	   Notice notice = service.getdetail(notice_num);
//	   model.addAttribute("noticedetail",notice);
//	   
//	   System.out.println(notice);
//	   
//	   return "noticeDetail";
//	}
	
	//공지사항 등록
	@GetMapping("/insert")
	public String insert(Notice notice) throws Exception {
		service.insert(notice);
		
		System.out.println("공지사항 등록 성공!!!");
		
		return "redirect:/notice/list";
	}
	
	//공지사항 수정
	@GetMapping("/update/{notice_num}")
	public String update(@PathVariable("notice_num") Integer notice_num,Notice notice) throws Exception {
		service.update(notice_num, notice);
		
		System.out.println("공지사항 수정 성공~~~~");
		
		return "redirect:/notice/list";
	}
	
	//공지사항 삭제
	@GetMapping("/delete/{notice_num}")
	public String Delete(@PathVariable("notice_num") Integer notice_num) throws Exception {
		service.delete(notice_num);
		
		System.out.println("공지사항 삭제 성공!");
		
		return "redirect:/notice/list";
	}
	
	
}
