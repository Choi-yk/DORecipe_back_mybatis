package com.dorecipe.main.member.service;

import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dorecipe.main.jwt.JwtTokenProvider;
import com.dorecipe.main.jwt.TokenInfo;
import com.dorecipe.main.member.dao.MemberDAO;
import com.dorecipe.main.member.vo.MemberVO;

import lombok.RequiredArgsConstructor;

@Service
//@Transactional(propagation = Propagation.REQUIRED)
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	
	//jwt test////////////////////////////////////
	private final MemberDAO memberDAO;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
 
    //여기서 login메서드를 구현해야함(??왜.........?)
    //로그인은 3단계
    //1.로그인 요청으로 들어온 memberId, password를 기반으로 Authentication 객체를 생성
    //2.authenticate() 메서드를 통해 요청된 Member에 대한 검증이 진행
    //3.검증이 정상적으로 통과되었다면 인증된 Authentication 객체를 기반으로 JWT 토큰을 생성
    
    //2번 과정에서 중요하게 볼 것은, loadUserByUsername 메서드를 실행한다는 것
    //해당 메서드는 검증을 위한 유저 객체를 가져오는 부분으로써, 어떤 객체를 검증할 것인지에 대해 직접 구현해주어야 함
    @Transactional
    public TokenInfo login(String member_id, String member_pwd) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(member_id, member_pwd);
        System.out.println("$$$$$$$MemberServiceImpl 실행됨(TokenInfo login) authenticationToken=>" + authenticationToken);
        
        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        System.out.println("*******MemberServiceImpl 실행됨(TokenInfo login) authentication=>" + authentication);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
        
        System.out.println("!!!!!!!MemberServiceImpl 실행됨(TokenInfo login) tokenInfo=>" + tokenInfo);
        
        return tokenInfo;
    }	
	
	//jwt test END///////////////////////////////
	
	
	
	//@Autowired
	//private MemberMapper memberMapper;
	
//	@Autowired
//	MemberDAO memberDAO;
//	
	// 회원목록 전체 조회
	@Override
	public List<MemberVO> listMembers() throws Exception {
		List<MemberVO> membersList = null;
		membersList = memberDAO.selectAllMemberList();
		
		System.out.println("Service - listMembers");
		
		return membersList;
	}
	
	//회원 정보 상세 조회
	@Override
	public MemberVO listMemberDetails(String member_id) throws Exception {
		MemberVO memberVO = memberDAO.selectAllMemberDetail(member_id);
		return memberVO;
	}
	
	//회원 정보 수정
	@Override
	public void ModifyMember(MemberVO memberVO) throws Exception {
		memberDAO.updateMember(memberVO);
	}
	
	// 회원 등록(가입)
	@Override
	public int JoinMember(MemberVO memberVO) throws Exception {
		System.out.println("Service - JoinMember");
		
		return memberDAO.insertMember(memberVO);
	}
	
	// 회원 삭제(탈퇴)
	@Override
	public int DeleteMember(String member_id) throws Exception {
		System.out.println("Service - DeleteMember");
		
		return memberDAO.deleteMember(member_id);
	}

}