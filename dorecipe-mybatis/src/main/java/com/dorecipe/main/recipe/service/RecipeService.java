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
	
	public List<RecipeVO> getList(){
		List<RecipeVO> recipeList = recipeDAO.getList();
		return recipeList;
	}

	public RecipeVO getDetail(Integer recipe_num) {
		RecipeVO recipeVO = recipeDAO.getDetail(recipe_num);
		return recipeVO;
	}
	
	public List<RecipeVO> getBundle(Integer recipe_num) {
		List<RecipeVO> recipeBundle = recipeDAO.getBundle(recipe_num);
		return recipeBundle;
	}
	
	public List<RecipeVO> getOrder(Integer recipe_num) {
		List<RecipeVO> recipeOrder = recipeDAO.getOrder(recipe_num);
		return recipeOrder;
	}
	
}
