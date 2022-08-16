<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원입력테스트</title>
</head>
<body>
	<form action="/member/join" method="post">
		<div>
			<label for="member_id">아이디</label>
			<input type="text">
		</div>
		<div>
			<label for="member_pwd">비밀번호</label>
			<input type="password">
		</div>
		<div>
			<label for="member_birth">생년월일</label>
			<input type="text">
		</div>
		<div>
			<label for="member_gender">성별</label>
			<input type="text">
		</div>
		<div>
			<label for="member_email">이메일</label>
			<input type="text">
		</div>
		<div>
			<label for="member_phone">전화번호</label>
			<input type="text">
		</div>
		<button type="submit">회원가입</button>
		
	</form>
</body>
</html>