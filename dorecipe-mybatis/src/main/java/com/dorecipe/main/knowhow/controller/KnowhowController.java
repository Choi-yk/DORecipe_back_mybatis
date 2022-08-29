package com.dorecipe.main.knowhow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dorecipe.main.knowhow.service.KnowhowService;
import com.dorecipe.main.knowhow.vo.KnowhowVO;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")   //react연동 -> 주석 해제
@RequestMapping(value="/knowhow")
@RequiredArgsConstructor
@RestController	//react연동 -> 주석 해제
//@Controller
public class KnowhowController {
	
	@Autowired
	private KnowhowService knowhowService;
	
	//react연동 -> 주석 해제
	// 노하우 목록 전체 조회
	@RequestMapping("/list")
	public List<KnowhowVO> getKnowhow() throws Exception {
		System.out.println("노하우 목록 출력 됨~~~~ - Controller");
		
		return knowhowService.listKnowhow();
	}
	
	//react연동 -> 주석 해제
	// 노하우 상세 조회
	@RequestMapping("/detail/{know_num}")
	public KnowhowVO detail(@PathVariable("know_num") Integer know_num) throws Exception {
		System.out.println("노하우 상세페이지 출력 됨~~~~" + know_num +" - Controller");
		return knowhowService.getDetail(know_num);
	}
	
	// 노하우 게시물 등록
	@PostMapping("/insert")
	public void insert(KnowhowVO knowhowVO) throws Exception {
		System.out.println("노하우 등록 성공!!! - controller");
		
		knowhowService.insertKnowhow(knowhowVO);
	}
	
	// 노하우 게시물 수정
	@GetMapping("/update/{know_num}")
	public String update(@PathVariable("know_num") int know_num, Model model) throws Exception {
		KnowhowVO knowhowVO = knowhowService.getDetail(know_num);

		model.addAttribute("knowhowVO", knowhowVO);
		
		return "KnowhowForm";
	}
	
	//react연동 -> 주석 해제
	@PostMapping("/update") // 보내!!!!
	public void update(KnowhowVO knowhowVO) throws Exception {
		System.out.println("Controller - knowhow num " + knowhowVO.getKnow_num());
		System.out.println("Controller - knowhow title " + knowhowVO.getKnow_title());
		System.out.println("Controller - knowhow content " + knowhowVO.getKnow_content());
		
		System.out.println("수정됨 - Controller");
		
		knowhowService.updateKnowhow(knowhowVO);
	}
	
	// 노하우 게시물 삭제
	@GetMapping("/delete/{know_num}")
	public String delete(@PathVariable("know_num") int know_num) throws Exception {
		knowhowService.deleteKnowhow(know_num);
		
		System.out.println("삭제됨 - Controller");
		
		return "redirect:/knowhow/list";	
	}
	
}
