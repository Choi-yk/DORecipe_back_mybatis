package com.dorecipe.main.jwt;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

   
   @Bean
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // For CORS error
//        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
        
        http
        	.cors().and().csrf().disable()	// We don't need CSRF for this example
        	.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)	//JWT를 사용하기 때문에 세션을 사용하지 않는다는 설정
        	.and()
        	.authorizeRequests().antMatchers("/login","/knowhow/**","/notice/**","/event/**","/recipe/**","/member/**","/join").permitAll()// dont authenticate this particular request
        	.antMatchers("/admin").hasRole("admin")
//        	.antMatchers("/notice/insert").hasRole("member")	//USER 권한이 있어야 요청할 수 있다는 설정
        	.anyRequest().permitAll();	//그 외 요청 permitall() 모두 허용

        //JWT 인증을 위하여 직접 구현한 필터를 UsernamePasswordAuthenticationFilter 전에 실행하겠다는 설정
        
        return http.build();
    }  
   
   @Bean
   public PasswordEncoder passwordEncoder() {
     return new BCryptPasswordEncoder();
   }

}