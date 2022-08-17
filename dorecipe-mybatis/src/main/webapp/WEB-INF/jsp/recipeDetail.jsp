<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>레시피상세</title>
</head>
<body>
	<h1>레시피상세</h1>
	<h2>아이디 : ${recipeVO.member_id}</h2>
	<h2>제목 : ${recipeVO.recipe_title}</h2><br>
	<h2>재료</h2>
	<hr>
	<c:forEach var="rb" items="${recipeBundle}">
		<span>${rb.ing_ingredient} ${rb.ing_amount}</span><input type="button" value="구매"> <br>
	</c:forEach>
	<h2>조리 순서 steps</h2>
	<hr>
	<c:forEach var="ro" items="${recipeOrder}">
		<span>
			<img src="${ro.order_path}" alt="${ro.order_path}"> 
			step : ${ro.order_num}  ${ro.order_explain}
		</span><br><br>
	</c:forEach>
</body>
</html>