<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head><title>Employee Form</title></head>
<body>
<h2>Employee Details</h2>

<form action="employeeDisplay.jsp" method="post">
    ID: <input type="text" name="id"><br>
    Name: <input type="text" name="name"><br>
    Mobile: <input type="text" name="mobile"><br>
    Email: <input type="email" name="email"><br>
    Gender:
    <input type="radio" name="gender" value="Male">Male
    <input type="radio" name="gender" value="Female">Female<br>
    DOB: <input type="date" name="dob"><br>
    Address: <textarea name="address"></textarea><br>
    Country:
    <select name="country">
        <option>India</option>
        <option>Other</option>
    </select><br>
    Languages:
    <input type="checkbox" name="lang" value="Java">Java
    <input type="checkbox" name="lang" value="Python">Python
    <input type="checkbox" name="lang" value="C++">C++
    <input type="checkbox" name="lang" value="JS">JavaScript<br>
    <input type="submit" value="Submit">
</form>
<h2>Employee Data</h2>
ID: <%= request.getParameter("id") %><br>
Name: <%= request.getParameter("name") %><br>
Mobile: <%= request.getParameter("mobile") %><br>
Email: <%= request.getParameter("email") %><br>
Gender: <%= request.getParameter("gender") %><br>
DOB: <%= request.getParameter("dob") %><br>
Address: <%= request.getParameter("address") %><br>
Country: <%= request.getParameter("country") %><br>
Languages:
<%
String[] langs = request.getParameterValues("lang");
if (langs != null) {
    for(String l : langs){
        out.print(l + " ");
    }
}
%>
</body>
</html>
