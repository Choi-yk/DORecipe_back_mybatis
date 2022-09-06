package com.dorecipe.main.recipe.dao;

import java.util.List;

import com.dorecipe.main.recipe.vo.RecipeVO;

public interface RecipeDAO {

	List<RecipeVO> getList();

	RecipeVO getDetail(Integer recipe_num);
	
	List<RecipeVO> getOrder(Integer recipe_num);
	
	List<RecipeVO> getComment(Integer recipe_num);
	
	
	
	// 레시피 등록
	int insertRecipe(RecipeVO recipeVO);

	//레시피 임시저장
	int recipeTemporarySave(RecipeVO recipeVO);	
	
	// 레시피 수정
	int updateRecipe(RecipeVO recipeVO);
	
	// 레시피 삭제
	int deleteRecipe(int recipe_num);
	

	//레시피 순서 등록
	int insertRecipeOrder(RecipeVO recipeVO);


	//레시피 재료 등록
	int insertRecipeIngredients(RecipeVO recipeVO);

	//레시피 번호 가져오기 
	int getRecipeNum(String member_id);


	//레시피 검색
	List<RecipeVO> searchRecipe(String recipe_title);


}
