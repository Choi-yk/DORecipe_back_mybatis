package com.dorecipe.main.member.vo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.ibatis.mapping.FetchType;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//public class MemberVO implements UserDetails{
	public class MemberVO {

	
	private int id;
	private String username;
	private String member_nickname;
	private String member_name;
	private String member_gender;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date member_birth;
	private String member_phone;
	private String member_imagePath;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date member_joinDate;
	private String email;
		
	
	// 데이터 출력
	@Override
	public String toString() {
		return "Member [id=" + id + ", username=" + username +", member_name=" + member_name 
				+ ", member_gender=" + member_gender + ", member_birth=" + member_birth +
				", member_phone=" + member_phone + ", member_imagePath=" + member_imagePath 
				+ ", member_joinDate=" + member_joinDate +  "]";
	}


}