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

	// 번호 가져오기
	@Override
	public int getRecipeNum(String member_id) {
		return mapper.getRecipeNum(member_id);
	}

	// 레시피 등록
	@Override
	public int insertRecipe(RecipeVO recipeVO) {
		return mapper.insertRecipe(recipeVO);
	}
	
	// 레시피 임시 저장 등록
	@Override
	public int recipeTemporarySave(RecipeVO recipeVO) {
		return mapper.recipeTemporarySave(recipeVO);
	}
	
	
	// 레시피 수정
	@Override
	public int updateRecipe(RecipeVO recipeVO) {
		return mapper.updateRecipe(recipeVO);
	}
	
	//레시피 삭제
	@Override
	public int deleteRecipe(int recipe_num) {
		return mapper.deleteRecipe(recipe_num);
	}


	// 요리 순서 등록
	@Override
	public int insertRecipeOrder(RecipeVO recipeVO) {
		return mapper.insertRecipeOrder(recipeVO);
	}

	//레시피 재료 등록
	@Override
	public int insertRecipeIngredients(RecipeVO recipeVO) {
		return mapper.insertRecipeIngredients(recipeVO);
	}

//	
//	public List<RecipeOrders> insertMultipleRecipeOrders(String[] orderArray){
//		return mapper.insertRecipeOrder()
//	}
	
	//레시피 검색
	@Override
	public List<RecipeVO> searchRecipe(String recipe_title) {
		return mapper.searchRecipe(recipe_title);
	}

}
