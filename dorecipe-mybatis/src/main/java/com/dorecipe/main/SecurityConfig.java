package com.dorecipe.main;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.dorecipe.main.login.service.LoginService;

import lombok.RequiredArgsConstructor;

@EnableGlobalMethodSecurity(prePostEnabled=true)
@RequiredArgsConstructor
@Configuration 	//환경설정이라는 어노테이션
@EnableWebSecurity	//웹에 security를 허용한다는 어노테이션(모든 요청 url이 이 클래스의 제어를 받도록 함)
public class SecurityConfig implements WebMvcConfigurer {
	//일단 gradle로 전체를 다 보호하고
	//여기서 보호를 풀어줄 부분을 지정하는 방식
	
	private final LoginService loginService;
	
	@Autowired
	private DataSource dataSource;
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.authorizeRequests().antMatchers("/**").permitAll()
            .and()
              .headers()
              .addHeaderWriter(new XFrameOptionsHeaderWriter(
                      XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
            .and()
  				.formLogin()					//login페이지,로그인 정보는 기본적으로 HttpSession을 이용
  				.loginPage("/login")			//기본 제공되는 form 말고, 커스텀 로그인 폼을 사용하고 싶으면 loginPage() 메서드를 사용
  												//이 때 커스텀 로그인 form의 action 경로와 loginPage()의 파라미터 경로가 일치해야 인증을 처리할 수 있음
  				.defaultSuccessUrl("/login")	//로그인을 성공했을 때 이동할 url(root url),컨트롤러에서 URL 매핑이 되어 있어야함
  			.and()
  				.logout()
  				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
  				.logoutSuccessUrl("/")
  				.invalidateHttpSession(true)	//HTTP 세션을 초기화하는 작업, session을 초기화(삭제) 안그러면 계속 로그인 상태
              ;
        return http.build();      //build() - 설정 고리 완성하기
    }

	@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
	
	@Bean
	public PasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("http://localhost:3000/");
	}
	
	
}