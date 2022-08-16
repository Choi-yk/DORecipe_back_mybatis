package com.dorecipe.main.event.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventVO {
	
	private int event_num;
	private String member_id;
	private String event_title;
	private String event_content;
	private String event_path;
	private Date event_creDate;
	private Date event_finDate;
	
}
