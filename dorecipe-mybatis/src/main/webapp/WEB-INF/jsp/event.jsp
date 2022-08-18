<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<%
  request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>이벤트</title>
</head>
<body>
	<table>
		<thead>
			<tr>
				<th> No. </th>
				<th> 제목 </th>
				<th> 참여 기간 </th>
				<th> 삭제 </th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="e" items="${eList}">
				<tr>
					<td>${e.event_num}</td>
					<td>
						<a href="/event/detail/${e.event_num}">
						${e.event_title}</a>
					</td>
					<td>${e.event_creDate}~${e.event_finDate}</td>
					<td>
						<a href="${contextPath}/event/delete/${e.event_num}">삭제</a>
					</td>
				</tr>
			</c:forEach>	
		</tbody>
	</table>
</body>
</html>