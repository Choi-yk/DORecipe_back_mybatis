<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 테스트</title>
</head>
<body>
<form action="/loginexe" method="post">

	<input
		name="member_id"
		class="idInput"
		required
		type="text"
		placeholder="아이디"
	/>
	<input
		name="member_pwd"
		class="pwdInput"
		required
		type="password"
		placeholder="비밀번호"
	/>
	<button type="submit" name="loginBtn" id="memberLogin">
		로그인
	</button>
</form>
</body>
<script>
function memberLogin() {
	$(document).ready(function() {
		$("#memberLogin").click(function() {
			if($("#member_id").val() == "") {
				alert("아이디 입력!!!");
				return;
			} else if($("#member_pwd").val() == "") {
				alert("비밀번호 입력!!!");
				return;
			} else {
				$("#loginForm").attr("action", "${root}/login").submit();
			}
		});
		 
		$('#mvRegisterBtn').focusin(function() {
			$(location).attr("href", "${root}/");
		});
	});
}
</script>
</html>