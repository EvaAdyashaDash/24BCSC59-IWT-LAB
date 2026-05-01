<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="db.jsp" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
    ArrayList<String[]> cart = (ArrayList<String[]>) session.getAttribute("cart");
    if (cart != null && !cart.isEmpty()) {
        // Here you would normally INSERT into an 'orders' table in pgAdmin
        // For now, we clear the session to "finalize" the order
        session.removeAttribute("cart");
        response.sendRedirect("bill.jsp?status=success");
    } else {
        response.sendRedirect("index.html");
    }
%>
</body>
</html>