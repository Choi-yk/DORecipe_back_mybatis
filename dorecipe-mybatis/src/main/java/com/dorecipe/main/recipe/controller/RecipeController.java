package com.dorecipe.main.recipe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dorecipe.main.recipe.service.RecipeService;
import com.dorecipe.main.recipe.vo.RecipeVO;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/recipe")
@RequiredArgsConstructor
public class RecipeController {

	@Autowired
	private RecipeService recipeService;
	
	//레시피 목록
	@RequestMapping("/list")
	public String EventList(Model model) {
		List<RecipeVO> recipeList = recipeService.getList();
		model.addAttribute("recipeList",recipeList);
		return "recipe";
	}
	
	//레시피 상세
	@RequestMapping("/detail/{recipe_num}")
	public String detail(Model model, @PathVariable Integer recipe_num) {
		
	//레시피번호확인
	System.out.println("------------------레시피 컨트롤러 조회 recipe_num : " + recipe_num);
	
	RecipeVO recipeVO = recipeService.getDetail(recipe_num);			//레시피 상세정보
	List<RecipeVO> recipeBundle = recipeService.getBundle(recipe_num);	//레시피 재료묶음
	List<RecipeVO> recipeOrder = recipeService.getOrder(recipe_num);	//레시피 조리순서
	List<RecipeVO> comment = recipeService.getComment(recipe_num);		//코멘트
	
	model.addAttribute("recipeVO",recipeVO);
	model.addAttribute("recipeBundle",recipeBundle);
	model.addAttribute("recipeOrder",recipeOrder);
	model.addAttribute("comment",comment);
	
	return "recipeDetail";
	}
	
}
