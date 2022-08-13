<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />

<%
  request.setCharacterEncoding("UTF-8");
%> 

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원목록테스트</title>
</head>
<body>
	<table>
		<thead>
			<tr>
				<th>이름</th>
				<th>아이디</th>
				<th>이메일</th>
				<th>삭제</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="member" items="${membersList}">
				<td>${member.member_name}</td>
				<td>${member.member_id}</td>
		   		<td>${member.member_email}</td>
		   		<td>
		   			<a href="#">삭제</a>
		   		</td>
			</c:forEach>
		</tbody>
	   </table>
</body>
</html>