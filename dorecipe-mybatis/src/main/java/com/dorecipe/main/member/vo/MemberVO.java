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
public class MemberVO implements UserDetails{
	
	private static final long serialVersionUID = 1L;
	
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
	private String member_role;
	
	

    @Builder.Default
    private List<String> roles = new ArrayList<>();
	
	// 데이터 출력
	@Override
	public String toString() {
		return "Member [member_id=" + member_id + ", member_pwd=" + member_pwd +", member_name=" + member_name + ", member_email=" + member_email 
				+ ", member_gender=" + member_gender + ", member_birth=" + member_birth + ", member_phone=" + member_phone + ", member_imagePath=" + member_imagePath 
				+ ", member_joinDate=" + member_joinDate  + ", member_role=" + member_role + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());	}

	@Override
	public String getPassword() {
		return member_pwd;
	}

	@Override
	public String getUsername() {
		return member_id;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}