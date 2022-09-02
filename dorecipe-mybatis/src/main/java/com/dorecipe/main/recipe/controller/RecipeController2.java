//package com.dorecipe.main.recipe.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.dorecipe.main.recipe.service.RecipeService;
//import com.dorecipe.main.recipe.vo.RecipeVO;
//
//import lombok.RequiredArgsConstructor;
//
////@CrossOrigin(origins="http://localhost:3000")   //react연동 -> 주석 해제
//@RequestMapping("/recipe")
//@RequiredArgsConstructor
////@RestController	//react연동 -> 주석 해제
//@Controller
//public class RecipeController2 {
//
//	@Autowired
//	private RecipeService recipeService;
//	
//	//레시피 목록
//	@RequestMapping("/list")
//	public String EventList(Model model) {
//		List<RecipeVO> recipeList = recipeService.getList();
//		model.addAttribute("recipeList",recipeList);
//		return "recipe";
//	}
//	
//	//레시피 상세
//	@RequestMapping("/detail/{recipe_num}")
//	public String detail(Model model, @PathVariable Integer recipe_num) {
//		
//	//레시피번호확인
//	System.out.println("------------------레시피 컨트롤러 조회 recipe_num : " + recipe_num);
//	
//	RecipeVO recipeVO = recipeService.getDetail(recipe_num);			//레시피 상세정보
//	List<RecipeVO> recipeBundle = recipeService.getBundle(recipe_num);	//레시피 재료묶음
//	List<RecipeVO> recipeOrder = recipeService.getOrder(recipe_num);	//레시피 조리순서
//	List<RecipeVO> comment = recipeService.getComment(recipe_num);		//코멘트
//	
//	model.addAttribute("recipeVO",recipeVO);
//	model.addAttribute("recipeBundle",recipeBundle);
//	model.addAttribute("recipeOrder",recipeOrder);
//	model.addAttribute("comment",comment);
//	
//	return "recipeDetail";
//	}
//	
//	//레시피등록
//	@GetMapping("/insert")
//	public String insert() {
//		return "RecipeInsert"; // jsp test
//	}
//	
//	@PostMapping("/insert")
//	public String insert(RecipeVO recipeVO) {
//		recipeService.insertRecipe(recipeVO);
////		
////		recipeService.insertBundleIngredients(recipeVO);
////		recipeService.insertRecipeOrder(recipeVO);
//		
//		System.out.println("레시피 등록됨 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
//	
//	//번들 재료 추가
//	@PostMapping("/insertBundleIngredient")
//	public String insertBundleIngredients(RecipeVO recipeVO) {
//		recipeService.insertBundleIngredients(recipeVO);
//		System.out.println("레시피 등록됨 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
//	
//	//번들 추가
//	@PostMapping("/insertBundle")
//	public String insertBundle(RecipeVO recipeVO) {
//		recipeService.insertBundleIngredients(recipeVO);
//		System.out.println("레시피 등록됨 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
//	
//	
//	//요리 순서 추가
//	@PostMapping("/insertRecipeOrder")
//	public String insertRecipeOrder(RecipeVO recipeVO) {
//		recipeService.insertRecipeOrder(recipeVO);
//		System.out.println("레시피 등록됨 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
//	
//	
//	
//	//레시피 수정
//	@GetMapping("/update/{recipe_num}")
//	public String update(@PathVariable("recipe_num") int recipe_num, Model model) {
//		RecipeVO recipeVO = recipeService.getDetail(recipe_num);
//		
//		System.out.println(recipe_num);
//		System.out.println(recipeVO.getRecipe_title());
//		
//		model.addAttribute("recipeVO", recipeVO);
//		
//		return "RecipeUpdate"; //jsp
//	}
//	@PostMapping("/update")
//	public String update(RecipeVO recipeVO) {
//		recipeService.updateRecipe(recipeVO);
//		
//		System.out.println("레시피 수정 - Controller");
//		
//		return "redirect:/recipe/list";
//	}
//	
//	//레시피 삭제
//	@GetMapping("delete/{recipe_num}")
//	public String delete(@PathVariable("recipe_num") Integer recipe_num) {
//		recipeService.deleteRecipe(recipe_num);
//		
//		System.out.println("레시피 삭제 성공!! - controller ");
//		
//		return "redirect:/recipe/list";
//	}
//	
//}
