<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>notice 공지사항</title>
</head>
<body>

	<table>
		<thead>
			<tr>
				<th> 등록 No.</th>
				<th> 작성자(관리자)</th>
				<th> 제목</th>
				<th> 내용</th>
				<th> 작성 날짜</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="n" items="${list}">
				<tr>
					<td>${n.notice_num}</td>
					<td>${n.member_id}</td>
					<td>${n.notice_title}</td>
					<td>${n.notice_content}</td>
					<td>${n.notice_creDate}</td>
				</tr>
			</c:forEach>	
		</tbody>
	</table>
</body>
</html>