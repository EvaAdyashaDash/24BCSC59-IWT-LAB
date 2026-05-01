<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="java.sql.*" %>
<%
    Connection con = null;
    try {
        Class.forName("org.postgresql.Driver");
        con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/TOMADO", "postgres", "#DeepDB08");
    } catch (Exception e) {
        out.println("Connection Error: " + e.getMessage());
    }
%>
<%
    String email = request.getParameter("email");
    if (email != null) {
        try {
            Class.forName("org.postgresql.Driver");
            
            PreparedStatement ps = con.prepareStatement("SELECT name FROM users WHERE email=? AND password=?");
            ps.setString(1, email);
            ps.setString(2, request.getParameter("password"));
            ResultSet rs = ps.executeQuery();
            
            if (rs.next()) {
                session.setAttribute("user", rs.getString("name"));
                response.sendRedirect("home.jsp");
            } else {
                // If login fails, check if the email even exists in the system
                PreparedStatement checkEmail = con.prepareStatement("SELECT id FROM users WHERE email=?");
                checkEmail.setString(1, email);
                ResultSet rsEmail = checkEmail.executeQuery();
                
                if (!rsEmail.next()) {
                    out.println("<script>alert('Account not found. Please sign up first!'); window.location='signup.jsp';</script>");
                } else {
                    out.println("<script>alert('Incorrect password. Please try again.');</script>");
                }
            }
            con.close();
        } catch (Exception e) { out.print(e); }
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