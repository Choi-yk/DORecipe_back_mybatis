package com.dorecipe.main.jwt;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

   private final JwtTokenProvider jwtTokenProvider;
   
   @Bean
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // For CORS error
//        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
        
        http
        	.csrf().disable()	// We don't need CSRF for this example
        	.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)	//JWT를 사용하기 때문에 세션을 사용하지 않는다는 설정
        	.and()
        	.authorizeRequests().antMatchers("/login","/knowhow/**","/notice/**","/event/**","/member/**").permitAll()// dont authenticate this particular request
        	.antMatchers("/admin").hasRole("ADMIN")
        	.antMatchers("/notice/insert").hasRole("USER")	//USER 권한이 있어야 요청할 수 있다는 설정
        	.anyRequest().authenticated();	//이 밖에 모든 요청에 대해서 인증을 필요로 한다는 설정

        http.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
        //JWT 인증을 위하여 직접 구현한 필터를 UsernamePasswordAuthenticationFilter 전에 실행하겠다는 설정
        
        return http.build();
    }  
   
   
   @Bean
   public PasswordEncoder passwordEncoder() {
     return new BCryptPasswordEncoder();
   }

}