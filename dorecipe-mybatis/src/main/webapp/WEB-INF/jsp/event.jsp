<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
			</tr>
		</thead>
		<tbody>
			<c:forEach var="e" items="${eList}">
				<tr>
					<td>${e.event_num}</td>
					<td>${e.event_title}</td>
					<td>${e.event_creDate}~${e.event_finDate}</td>
				</tr>
			</c:forEach>	
		</tbody>
	</table>
</body>
</html>