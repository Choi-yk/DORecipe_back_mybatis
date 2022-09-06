package com.dorecipe.main.recipe.vo;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeVO {

	//레시피테이블
	private Integer recipe_num;
	private String recipe_title;
	private int recipe_savetype;
	private String recipe_introduce;
	private String recipe_url;
	private String recipe_rpath;
	private String category_kind;
	private String category_theme;
	private String category_way;
	private String category_ing;
	private String information_person;
	private String information_time;
	private String information_level;
	private String completion_path1;
	private String completion_path2;
	private String completion_path3;
	private String completion_path4;
	private String completion_tip;
	private String recipe_creDate;
	private String member_id;
	
		
	//요리재료 테이블
	private int ing_num;
	private String ing_ingredient;
	private String ing_amount;
	
	//요리순서 테이블
	private int order_num;
	private String order_explain;
	private String order_path;
	
	private List<RecipeVO> orderVoList;
	private List<RecipeVO> orderVoList2;
	
	//코멘트 테이블
	private int comment_num;
	private String comment_content;
	private String comment_path;
	private String comment_creDate;
	
	
	// 데이터 출력
	@Override
	public String toString() {
		return "recipe_rpath [recipe_rpath=" + recipe_rpath + "]";
	}
}
