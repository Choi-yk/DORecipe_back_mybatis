package com.dorecipe.main.recommendrecipe.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecommendRecipeVO {

	private String member_id;
	private int recipe_num;
	private int reco_num;
	private Date reco_creDate;

	private String recipe_title;
	private String recipe_rpath;
	
}
