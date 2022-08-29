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
	
	//레시피 목록 조회
	@Override
	public List<RecipeVO> getList() {
		return mapper.getList(); 
	}
	
	//레시피 상세 조회
	@Override
	public RecipeVO getDetail(Integer recipe_num) {
		return mapper.getDetail(recipe_num);
	}
	
	//레시피 재료묶음 조회
	@Override
	public List<RecipeVO> getBundle(Integer recipe_num) {
		return mapper.getBundle(recipe_num);
	}
	
	//레시피 조리순서 조회
	@Override
	public List<RecipeVO> getOrder(Integer recipe_num) {
		return mapper.getOrder(recipe_num);
	}
	
	//레시피 코멘트 조회
	@Override
	public List<RecipeVO> getComment(Integer recipe_num) {
		return mapper.getComment(recipe_num);
	}

	// 레시피 등록
	@Override
	public int insertRecipe(RecipeVO recipeVO) {
		return mapper.insertRecipe(recipeVO);
	}
	
}
