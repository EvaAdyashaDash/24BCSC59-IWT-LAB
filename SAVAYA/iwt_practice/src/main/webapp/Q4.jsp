<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Q4</title>
</head>
<body>
<form action="Q4.jsp" method="post">
    Email: <input type="text" name="email"><br>
    Password: <input type="password" name="pass"><br>
    <input type="submit" value="Login">
</form>
<%
String email = request.getParameter("email");
String pass = request.getParameter("pass");
if(email != null){
    if(email.equals("admin@gmail.com") && pass.equals("admin")){
        RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
        rd.forward(request, response);
    } else {
        out.println("<p style='color:red;'>Invalid Credentials</p>");
    }
}
%>
</body>
</html>