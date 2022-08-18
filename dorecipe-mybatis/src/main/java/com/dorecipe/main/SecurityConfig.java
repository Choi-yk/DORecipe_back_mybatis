package com.dorecipe.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;

// 오류 나서 일단 주석 처리 했습니다 풀 받으시고 주석 풀어서 다시 코드하세요
// 먼저 빌드그래들에서 시큐리티 주석 풀어서 하시면 됩니다
//@Configuration
//@EnableWebSecurity
public class SecurityConfig {

//      @Bean
//      public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//          http.authorizeRequests().antMatchers("/**").permitAll()
//              .and()
//                  .csrf().ignoringAntMatchers("/h2-console/**") // h2 아님
//              .and()
//                  .headers()
//                  .addHeaderWriter(new XFrameOptionsHeaderWriter(
//                          XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
//              ;
//            return http.build();      
//        }
}