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

	//레시피 완성 등록
	int insertRecipeComplete(RecipeVO recipeVO);

	//레시피 번호 가져오기 
	int getRecipeNum(String member_id);
	
	//레시피 검색
	List<RecipeVO> searchRecipe(String recipe_title);

	//레시피 상세 검색
	List<RecipeVO> detailSearchRecipe(String category_kind, String category_theme, String category_way,
			String category_ing, int recipe_savetype);

	//레시피 상세 검색 상세 레시피 보기
	List<RecipeVO> showDetailSearchRecipe(Integer recipe_num);

	//크롤링_재료 순서
	int insertRecipeOrderCheerio(RecipeVO recipeVO);
	
	//크롤링_재료 
	int insertRecipeIngredientsCheerio(RecipeVO recipeVO);

	//상세 재료 가져오기
	List<RecipeVO> getIngredientList(Integer recipe_num);

	//레시피 좋아요 가져오기
	Integer getRecipeLikes(Integer recipe_num);

	//좋아요 삭제
	Integer removeLikes(String param1, Integer param2);
	//좋아요 추가
	Integer insertLikes(String param1, Integer param2,Integer param3);
	//좋아요한 멤버
	String getLikedMember(String param1, Integer param2);




}
