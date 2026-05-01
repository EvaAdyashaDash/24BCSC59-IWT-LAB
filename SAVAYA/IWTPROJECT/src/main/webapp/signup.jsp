<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="db.jsp" %>
<%
    String email = request.getParameter("email");
    if (email != null && con != null) {
        PreparedStatement check = con.prepareStatement("SELECT id FROM users WHERE email=?");
        check.setString(1, email);
        if (check.executeQuery().next()) {
            out.println("<script>alert('Email exists! Log in instead.'); window.location='login.html';</script>");
        } else {
            PreparedStatement ps = con.prepareStatement("INSERT INTO users(name, email, password) VALUES(?,?,?)");
            ps.setString(1, request.getParameter("name"));
            ps.setString(2, email);
            ps.setString(3, request.getParameter("password"));
            ps.executeUpdate();
            response.sendRedirect("login.html");
        }
    }
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>