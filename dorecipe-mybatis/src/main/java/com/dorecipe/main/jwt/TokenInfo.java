package com.dorecipe.main.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class TokenInfo {
	//클라이언트에 토큰을 보내기 위한 DTO
	private String grantType;
    private String accessToken;
    private String refreshToken;
}
