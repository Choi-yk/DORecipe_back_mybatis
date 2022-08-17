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
				<th> 수정 </th>
				<th> 삭제 </th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="n" items="${list}">
				<tr>
					<td>${n.notice_num}</td>
					<td>${n.member_id}</td>
					<td><a href="/notice/detail/${n.notice_num}">${n.notice_title}</td>
					<td>${n.notice_content}</td>
					<td>${n.notice_creDate}</td>
					<td>
		   				<a href="${contextPath}/notice/update/${n.notice_num}">수정</a>
		   			</td>
					<td>
		   				<a href="${contextPath}/notice/delete/${n.notice_num}">삭제</a>
		   			</td>
				</tr>
			</c:forEach>	
		</tbody>
	</table>
	
	<br>
	<a href="noticeForm.jsp">공지사항 작성</a>
	
	<br>
	<form  method="post">
			
		<div>
			<label for="notice_title">제목</label>
			<input value="${notice_title}">
		</div>
		<div>
			<label for="notice_content">내용</label>
			<input value="${notice_content}">
		</div>
		<a href="${contextPath}/notice/insert">등록</a>
	</form>
	
</body>
</html>