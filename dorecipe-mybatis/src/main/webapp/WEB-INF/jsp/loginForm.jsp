<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 테스트</title>
</head>
<body>
<form action="#" method="get">
	<input
		name="member_id"
		class="idInput"
		required
		type="text"
		placeholder="아이디"
	/>
	<input
		name="memeber_pwd"
		class="pwdInput"
		required
		type="password"
		placeholder="비밀번호"
	/>
	<button type="submit" name="loginBtn" onclick={memberLogin}>
		로그인
	</button>
</form>
</body>
<script>
function memberLogin() {
		
}
</script>
</html>