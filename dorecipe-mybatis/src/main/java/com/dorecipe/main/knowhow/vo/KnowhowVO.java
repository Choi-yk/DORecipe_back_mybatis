package com.dorecipe.main.knowhow.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KnowhowVO {
	private int know_num;
	private String member_id;
	private String know_title;
	private String know_content;
	private String know_creDate;
	private String know_path;
	
	public KnowhowVO() { }

	public KnowhowVO(int know_num, String member_id, String know_title, String know_content, String know_creDate,
			String know_path) {
		super();
		this.know_num = know_num;
		this.member_id = member_id;
		this.know_title = know_title;
		this.know_content = know_content;
		this.know_creDate = know_creDate;
		this.know_path = know_path;
	}
	
	// 데이터 출력
	@Override
	public String toString() {
		return "Knowhow [know_num=" + know_num + "member_id=" + member_id +"know_title=" + know_title + ", know_content= " + know_content 
				+ "know_creDate=" + know_creDate + "know_path=" + know_path + "]";
	}
	
}
