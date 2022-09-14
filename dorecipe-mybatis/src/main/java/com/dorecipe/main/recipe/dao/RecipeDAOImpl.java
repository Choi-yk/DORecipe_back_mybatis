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
	
	//레시피 완성 등록
	@Override
	public int insertRecipeComplete(RecipeVO recipeVO) {
		return mapper.insertRecipeComplete(recipeVO);
	}
	
	//레시피 헤더에서 검색
	@Override
	public List<RecipeVO> searchRecipe(String recipe_title) {
		return mapper.searchRecipe(recipe_title);
	}
	
	//레시피 상세 검색
	@Override
	public List<RecipeVO> detailSearchRecipe(String category_kind, String category_theme, String category_way,
			String category_ing, int recipe_savetype) {
		return mapper.detailSearchRecipe(category_kind,category_theme,category_way,category_ing, recipe_savetype);
	}

	//상세검색 결과
	@Override
	public List<RecipeVO> showDetailSearchRecipe(Integer recipe_num) {
		return mapper.showDetailSearchRecipe(recipe_num);
	}

	////////////크롤링
	@Override
	public int insertRecipeOrderCheerio(RecipeVO recipeVO) {
		return mapper.insertRecipeOrderCheerio(recipeVO);
	}

	@Override
	public int insertRecipeIngredientsCheerio(RecipeVO recipeVO) {
		return mapper.insertRecipeIngredientsCheerio(recipeVO);
	}
	////////////크롤링

	@Override
	public List<RecipeVO> getIngredientList(Integer recipe_num) {
		return mapper.getIngredientList(recipe_num);
	}

//	//좋아요 개수가져오기 (합)
	@Override
	public Integer getRecipeLikes(Integer recipe_num) {
		return mapper.getRecipeLikes(recipe_num);
	}

	@Override
	public Integer removeLikes(String param1, Integer param2) {
		return mapper.removeLikes(param1,param2);
	}

	@Override
	public Integer insertLikes(String param1, Integer param2, Integer param3) {
		return mapper.insertLikes(param1,param2,param3);
	}

	//레시피 좋아요한 회원명
	@Override
	public String getLikedMember(String param1, Integer param2) {
		return mapper.getLikedMember(param1,param2);
	}

	
	@Override
	public List<RecipeVO> recordCompleteRecipe(String member_id) {
		return mapper.recordCompleteRecipe(member_id);
	}

	@Override
	public List<RecipeVO> recordRecipe(String member_id) {
		return mapper.recordRecipe(member_id);
	}

}

