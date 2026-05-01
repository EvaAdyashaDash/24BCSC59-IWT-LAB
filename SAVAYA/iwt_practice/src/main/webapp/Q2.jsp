<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head><title>Q2</title></head>
<body>
<form action="Q2.jsp">
    Enter Number: <input type="number" name="num">
    <input type="submit" value="Check">
</form>

<%
String n = request.getParameter("num");
if(n != null){
    int num = Integer.parseInt(n);
    boolean isPrime = true;

    if(num <= 1) isPrime = false;
    for(int i=2;i<=num/2;i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime)
        out.println("<p>Prime Number</p>");
    else
        out.println("<p>Not Prime</p>");
}
%>
</body>
</html>