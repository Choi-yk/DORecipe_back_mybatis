package com.dorecipe.main.recipe.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dorecipe.main.recipe.vo.RecipeVO;

@Repository
public class RecipeDAOImpl implements RecipeDAO{

	private RecipeDAO mapper;
	
	@Autowired
	public RecipeDAOImpl(SqlSession sqlSession) {
		mapper = sqlSession.getMapper(RecipeDAO.class);
	}
	
	@Override
	public List<RecipeVO> getList() {
		return mapper.getList(); 
	}
	
	@Override
	public RecipeVO getDetail(Integer recipe_num) {
		return mapper.getDetail(recipe_num);
	}
	
}
