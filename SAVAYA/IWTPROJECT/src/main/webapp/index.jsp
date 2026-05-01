<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.sql.*" %>

<%
Connection con = null;

try {
    Class.forName("org.postgresql.Driver");
    con = DriverManager.getConnection(
        "jdbc:postgresql://localhost:5432/TOMADO",
        "postgres",
        "#DeepDB08"
    );

    if (con == null) {
        out.println("Database connection failed.");
        return;
    }

    String email = request.getParameter("email");
    String password = request.getParameter("password");

    if (email != null && password != null) {

        PreparedStatement ps = con.prepareStatement(
            "SELECT name FROM users WHERE email=? AND password=?"
        );
        ps.setString(1, email);
        ps.setString(2, password);

        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            session.setAttribute("user", rs.getString("name"));
            response.sendRedirect("home.jsp");
        } else {
            PreparedStatement checkEmail = con.prepareStatement(
                "SELECT id FROM users WHERE email=?"
            );
            checkEmail.setString(1, email);

            ResultSet rsEmail = checkEmail.executeQuery();

            if (!rsEmail.next()) {
                out.println("<script>alert('Account not found. Please sign up first!'); window.location='signup.jsp';</script>");
            } else {
                out.println("<script>alert('Incorrect password. Please try again.');</script>");
            }

            rsEmail.close();
            checkEmail.close();
        }

        rs.close();
        ps.close();
    }

    con.close();

} catch (Exception e) {
    out.println("Error: " + e.getMessage());
}
%>