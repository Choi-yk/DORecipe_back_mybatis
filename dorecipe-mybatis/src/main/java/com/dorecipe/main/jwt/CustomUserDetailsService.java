//package com.dorecipe.main.jwt;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.dorecipe.main.member.dao.MemberDAO;
//import com.dorecipe.main.member.vo.MemberVO;
//
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//public class CustomUserDetailsService implements UserDetailsService {
//	
////	@Autowired
////	MemberDAO memberDAO;
//	
//	private final MemberDAO memberDAO;
//	private final PasswordEncoder passwordEncoder;
//	
//	@Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return memberDAO.findByMemberId(username)
//                .map(this::createUserDetails)
//                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
//    }
// 
//    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
//    private UserDetails createUserDetails(MemberVO memberVO) {
//        return User.builder()
//                .username(memberVO.getMember_id())
//                .password(passwordEncoder.encode(memberVO.getMember_pwd()))
//                .roles(memberVO.getMember_role())
//                .build();
//    }
//	//PasswordEncoder를 통해 UserDetails 객체를 생성할 때 encoding해줌
//    //왜냐하면 Spring Security는 사용자 검증을 위해 encoding된 password와 그렇지 않은 password를 비교하기 때문
//	
//	
//	
////	@Override
////	@Transactional
////	public UserDetails loadUserByUsername(String member_id) throws UsernameNotFoundException {
////		MemberVO memberVO = memberDAO.findByUsername(member_id)
////				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
////		return UserDetailsImpl.build(user);
////	}
//
//}
