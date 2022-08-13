package com.dorecipe.main.notice.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;

public interface NoticeControllerInter {
	//일단 인터페이스 없으 그냥 class로만 했음
	//인터페이스랑 impl로 나눠야 하나?
	//그냥 class하나로 하면 안되나...?
	public ModelAndView listNotice(HttpServletRequest request, HttpServletResponse response) throws Exception;
}
