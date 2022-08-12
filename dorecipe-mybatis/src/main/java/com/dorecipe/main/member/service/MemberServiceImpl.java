package com.dorecipe.main.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.member.mapper.MemberMapper1;

@Service
public class MemberServiceImpl {

	@Autowired
	MemberMapper1 memberMapper1;
	
	public void testXML() {
		System.out.println("server start-----------------------------------");
		String testTXT = memberMapper1.testXML();
		System.out.println("test" + testTXT);
	}
	
}
