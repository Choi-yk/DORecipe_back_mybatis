package com.dorecipe.main.recipe.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeVO {

	private int recipe_num;
	private String recipe_title;
	private int recipe_savetype;
	private String recipe_introduce;
	private String recipe_url;
	private String recipe_rpath;
	private String recipe_tag;
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
	private Date recipe_creDate;
	private String member_id;
	
	
	private int bundle_num;
	private String bundle;
	
	
	private int ing_num;
	private String ing_ingredient;
	private String ing_amount;
	
	
	private int order_num;
	private String order_explain;
	private String order_path;
	
	
}
