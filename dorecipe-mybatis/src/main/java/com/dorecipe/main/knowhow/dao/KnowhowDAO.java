package com.dorecipe.main.knowhow.dao;

import java.util.List;

import com.dorecipe.main.knowhow.vo.KnowhowVO;

public interface KnowhowDAO {
	// 노하우 목록 전체 조회
	public List<KnowhowVO> selectAllKnowhowList() throws Exception;
	
	// 노하우 게시물 수정
	
	// 노하우 게시물 삭제
	public int deleteKnowhow(int id) throws Exception;
}
