package com.dorecipe.main.knowhow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	// 노하우 상세 조회
	@RequestMapping("/detail/{know_num}")
	public String detail(Model model, @PathVariable("know_num") Integer know_num) throws Exception {
		
		KnowhowVO knowhowVO = knowhowService.getDetail(know_num);
		model.addAttribute("knowhowVO", knowhowVO);
		
		System.out.println("Controller!!!! knowhow title " + knowhowVO.getKnow_title());
		System.out.println("Controller!!!! knowhow content " + knowhowVO.getKnow_content());
		
		
		return "knowhowDetail";
	}
	
	// 노하우 등록 페이지 이동
	@GetMapping("/insert")
	public String insert() throws Exception{
		return "knowhowInsert";
	}
	
	// 노하우 게시물 등록
	@PostMapping("/insert")
	public String insert(KnowhowVO knowhowVO) throws Exception {
		
		System.out.println("Controller!!!! knowhow title " + knowhowVO.getKnow_title());
		System.out.println("Controller!!!! knowhow content " + knowhowVO.getKnow_content());
		
		knowhowService.insertKnowhow(knowhowVO);
		
		System.out.println("노하우 등록 성공!!! - controller");
		
		return "redirect:/knowhow/list";
	}
	
	// 노하우 게시물 수정
//	@GetMapping("/update/{know_num}")
//	public String update(@PathVariable("know_num") Integer know_num, KnowhowVO knowhowVO) throws Exception {
//		
//		knowhowService.updateKnowhow(know_num,knowhowVO);
//		
//		return "redirect:/knowhow/list";
//	}
	
	// 노하우 게시물 삭제
	@GetMapping("/delete/{know_num}")
	public String delete(@PathVariable("know_num") Integer know_num) throws Exception {
		knowhowService.deleteKnowhow(know_num);
		
		System.out.println("삭제됨 - Controller");
		
		return "redirect:/knowhow/list";	
	}
	
}
