package com.dorecipe.main.knowhow.service;

import java.util.List;

import com.dorecipe.main.knowhow.vo.KnowhowVO;

public interface KnowhowService {
	// 노하우 목록 전체 조회
	public List<KnowhowVO> listKnowhow() throws Exception;
	
	// 노하우 게시물 수정
	
	// 노하우 게시물 삭제
}
