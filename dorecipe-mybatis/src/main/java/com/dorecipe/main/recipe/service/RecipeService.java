package com.dorecipe.main.recipe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.recipe.dao.RecipeDAO;
import com.dorecipe.main.recipe.vo.RecipeVO;

@Service
public class RecipeService {

	@Autowired
	private RecipeDAO recipeDAO;
	
	//레시피 목록
	public List<RecipeVO> getList(){
		List<RecipeVO> recipeList = recipeDAO.getList();
		return recipeList;
	}
	
	//레시피 상세
	public RecipeVO getDetail(Integer recipe_num) {
		RecipeVO recipeVO = recipeDAO.getDetail(recipe_num);
		return recipeVO;
	}
	
	//레시피 재료묶음
	public List<RecipeVO> getBundle(Integer recipe_num) {
		List<RecipeVO> recipeBundle = recipeDAO.getBundle(recipe_num);
		return recipeBundle;
	}
	
	//레시피 조리순서
	public List<RecipeVO> getOrder(Integer recipe_num) {
		List<RecipeVO> recipeOrder = recipeDAO.getOrder(recipe_num);
		return recipeOrder;
	}
	
	public List<RecipeVO> getComment(Integer recipe_num) {
		List<RecipeVO> comment = recipeDAO.getComment(recipe_num);
		return comment;
	}
	//레시피 번호 가져오기
//	public int getRecipeNum() {
//		int recipe_num = recipeDAO.getRecipeNum();
//		return recipe_num;
//	}
	
	//레시피 등록
	public int insertRecipe(RecipeVO recipeVO) {
		return recipeDAO.insertRecipe(recipeVO);
	}
	
//	public int insertOrder(RecipeVO recipeVO) {
//		return recipeDAO.insertOrder(recipeVO);
//	}
	
	//레시피 수정
	public int updateRecipe(RecipeVO recipeVO) {
		return recipeDAO.updateRecipe(recipeVO);
	}
	
	//레시피 삭제
	public int deleteRecipe(int recipe_num) {
		return recipeDAO.deleteRecipe(recipe_num);
	}

	//번들 추가
	public int insertBundleIngredients(RecipeVO recipeVO) {
		return recipeDAO.insertBundleIngredients(recipeVO);
		
	}

	//레시피 순서 추가
	public int insertRecipeOrder(RecipeVO recipeVO) {
		return recipeDAO.insertRecipeOrder(recipeVO);

		
	}
	
}
