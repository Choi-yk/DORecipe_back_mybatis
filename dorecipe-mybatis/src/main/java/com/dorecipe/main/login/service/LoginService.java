package com.dorecipe.main.login.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dorecipe.main.jwt.JwtTokenProvider;
import com.dorecipe.main.jwt.TokenInfo;
import com.dorecipe.main.login.dao.LoginDAO;

import lombok.RequiredArgsConstructor;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LoginService {
	
	//DAO 연결
	private final LoginDAO loginDAO;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;

	
	@Transactional
	public TokenInfo login(String member_id, String member_pwd) throws Exception {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(member_id, member_pwd);
        System.out.println("여기옴?");
        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
 
        System.out.println("여기옴?");
        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
 
        System.out.println(tokenInfo + "token");
       
        return tokenInfo;	
        }


//	@Override
//	public MemberVO findById(MemberVO memberVO) throws Exception {
//		
//		return loginDAO.findById(memberVO);
//	}
	
}
