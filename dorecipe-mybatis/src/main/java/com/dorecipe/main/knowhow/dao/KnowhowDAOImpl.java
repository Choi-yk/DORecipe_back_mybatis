package com.dorecipe.main.knowhow.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.knowhow.vo.KnowhowVO;

@Repository
public class KnowhowDAOImpl implements KnowhowDAO {

	@Autowired
	SqlSession sqlSession;
	
	// 노하우 목록 전체 조회
	@Override
	public List<KnowhowVO> selectAllKnowhowList() throws Exception {
		List<KnowhowVO> knowhowList = null;
		knowhowList = sqlSession.selectList("mapper.knowhow.selectAllKnowhowList");
		
		return knowhowList;
	}

}
