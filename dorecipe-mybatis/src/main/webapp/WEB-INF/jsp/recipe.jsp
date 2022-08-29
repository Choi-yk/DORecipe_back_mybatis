<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>레시피</title>
</head>
<body>
<h1>Recipes</h1>
	<c:forEach var="r" items="${recipeList}">
	<table>
		<tr>
			<td><a href="/recipe/detail/${r.recipe_num}"><img src="${r.recipe_rpath}" alt="${r.recipe_rpath}"> </a></td>
		</tr>
		<tr>
			<td>${r.recipe_title}</td>
		</tr>
		<tr>
			<td>${r.information_level}</td>
		</tr>
		<br>
	</table>
	</c:forEach>
	<br>
	<a href="${contextPath}/recipe/insert">레시피 등록하기</a>
</body>
</html>