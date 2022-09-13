package com.dorecipe.main.comment.vo;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentVO {
	
	private int recipe_num;
	private int comment_num;
	private String comment_content;
	private String comment_path;
	private String member_id;
	private Date comment_creDate;
	
	private CommentVO() { }

	public CommentVO(int recipe_num, int comment_num, String comment_content, String comment_path, String member_id,
			Date comment_creDate) {
		super();
		this.recipe_num = recipe_num;
		this.comment_num = comment_num;
		this.comment_content = comment_content;
		this.comment_path = comment_path;
		this.member_id = member_id;
		this.comment_creDate = comment_creDate;
	}

	@Override
	public String toString() {
		return "CommentVO [recipe_num=" + recipe_num + ", comment_num=" + comment_num + ", comment_content="
				+ comment_content + ", comment_path=" + comment_path + ", member_id=" + member_id
				+ ", comment_creDate=" + comment_creDate + "]";
	}

}
