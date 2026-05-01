<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>BMR Calculator</h2>
<form method="post">
    Age: <input type="number" name="age"><br>
    Weight (kg): <input type="number" name="weight"><br>
    Height (cm): <input type="number" name="height"><br>
    Gender:
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="female">Female<br>
    <input type="submit" value="Calculate">
</form>
<%
if(request.getParameter("age") != null){
    int age = Integer.parseInt(request.getParameter("age"));
    double weight = Double.parseDouble(request.getParameter("weight"));
    double height = Double.parseDouble(request.getParameter("height"));
    String gender = request.getParameter("gender");
    double bmr = 0;
    if("male".equals(gender)){
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    out.println("<h3>BMR: " + bmr + " Calories/day</h3>");
}
%>
</body>
</html>