package com.dorecipe.main.knowhow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.knowhow.dao.KnowhowDAO;
import com.dorecipe.main.knowhow.vo.KnowhowVO;

@Service
public class KnowhowServiceImpl implements KnowhowService {
	
	@Autowired
	KnowhowDAO knowhowDAO;

	@Override
	public List<KnowhowVO> listKnowhow() throws Exception {
		List<KnowhowVO> knowhowList = null;
		knowhowList = knowhowDAO.selectAllKnowhowList();
		
		System.out.println("DAO 주입 완 - sercvice");
		
		return knowhowList;
	}

	//삭제
	@Override
	public int deleteKnowhow(int know_num) throws Exception {
		return knowhowDAO.deleteKnowhow(know_num);
	}

}
