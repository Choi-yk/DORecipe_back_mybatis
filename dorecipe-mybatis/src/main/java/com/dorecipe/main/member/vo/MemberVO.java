package com.dorecipe.main.member.vo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberVO {
	private String member_id;
	private String member_pwd;
	private String member_name;
	private String member_email;
	private String member_gender;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date member_birth;
	private String member_phone;
	private String member_imagePath;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date member_joinDate;
	private int member_like;
	private String member_role;
	
	public MemberVO() { }

	
	
	public MemberVO(String member_id, String member_pwd, String member_name, String member_email, String member_gender,
			Date member_birth, String member_phone, String member_imagePath, Date member_joinDate, int member_like,
			String member_role) {
		super();
		this.member_id = member_id;
		this.member_pwd = member_pwd;
		this.member_name = member_name;
		this.member_email = member_email;
		this.member_gender = member_gender;
		this.member_birth = member_birth;
		this.member_phone = member_phone;
		this.member_imagePath = member_imagePath;
		this.member_joinDate = member_joinDate;
		this.member_like = member_like;
		this.member_role = member_role;
	}
	
	// 데이터 출력
	@Override
	public String toString() {
		return "Member [member_id=" + member_id + ", member_pwd=" + member_pwd +", member_name=" + member_name + ", member_email=" + member_email 
				+ ", member_gender=" + member_gender + ", member_birth=" + member_birth + ", member_phone=" + member_phone + ", member_imagePath=" + member_imagePath 
				+ ", member_joinDate=" + member_joinDate + ", member_like=" + member_like + ", member_role=" + member_role + "]";
	}
}