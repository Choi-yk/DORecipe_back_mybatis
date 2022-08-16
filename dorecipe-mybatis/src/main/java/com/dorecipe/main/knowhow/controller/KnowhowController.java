package com.dorecipe.main.knowhow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.knowhow.service.KnowhowService;
import com.dorecipe.main.knowhow.vo.KnowhowVO;

import lombok.RequiredArgsConstructor;

@RequestMapping("/knowhow")
@RequiredArgsConstructor
@Controller
public class KnowhowController {
	
	@Autowired
	private KnowhowService knowhowService;
	
	// 노하우 목록 전체 조회
	@RequestMapping("/list")
	public String list(Model model) throws Exception {
		List<KnowhowVO> knowhowList = knowhowService.listKnowhow();
		
		model.addAttribute("knowhowList", knowhowList);
		
		System.out.println("노하우 목록 출력 됨~~~~ - Controller");
		
		return "knowhow";
	}
	
	// 노하우 게시물 수정
	
	// 노하우 게시물 삭제
}
