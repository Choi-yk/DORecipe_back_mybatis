package com.dorecipe.main.event.vo;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventVO {
	
	private int event_num;
	private String member_id;
	private String event_title;
	private String event_content;
	private String event_path;
	private String event_creDate;
	private String event_finDate;
	
}
