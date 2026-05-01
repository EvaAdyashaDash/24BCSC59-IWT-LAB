<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>   
<%@ page import="java.util.*" %>

<%
    // 1. DATABASE CONNECTION SETUP
    Connection con = null;
    try {
        Class.forName("org.postgresql.Driver"); // Force driver load
        con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/TOMADO", "postgres", "#DeepDB08");
    } catch (Exception e) {
        out.println("<p style='color:red;'>Connection Error: " + e.getMessage() + "</p>");
    }

    // 2. SESSION & CART INITIALIZATION
    ArrayList<String[]> cart = (ArrayList<String[]>) session.getAttribute("cart");
    if (cart == null) {
        cart = new ArrayList<String[]>();
        session.setAttribute("cart", cart);
    }

    // 3. HANDLE ADD TO CART ACTION
    String itemName = request.getParameter("itemName");
    if (itemName != null) {
        String itemPrice = request.getParameter("itemPrice");
        cart.add(new String[]{itemName, itemPrice});
    }
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>TOMADO - Menu</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f7f6; margin: 0; }
        .header { background: linear-gradient(to right, #B5B7FF, #D2CFFF); padding: 20px; display: flex; justify-content: space-between; align-items: center; color: white; }
        .menu-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 40px; justify-content: center; }
        .food-card { background: white; border-radius: 15px; padding: 20px; width: 220px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.3s; }
        .food-card:hover { transform: translateY(-5px); }
        .btn-add { background: #B5B7FF; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; }
        .btn-cart { background: white; color: #5E5799; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>

<div class="header">
    <h1>TOMADO</h1>
    <div>
        <a href="bill.jsp" class="btn-cart">View Bill (<%= cart.size() %>)</a>
        <a href="index.jsp" style="color: white; margin-left: 15px;">Logout</a>
    </div>
</div>

<h2 style="text-align:center; color: #5E5799; margin-top: 30px;">Our Delicious Menu</h2>

<div class="menu-container">
    <%
        if (con != null) {
            try {
                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT * FROM products");
                
                // If the loop doesn't run, check if your products table has data!
                while(rs.next()) {
    %>
        <div class="food-card">
            <%-- Make sure logo.JPG is in your WebContent folder --%>
            <img src="logo.JPG" width="100%" style="border-radius: 10px; margin-bottom: 10px;">
            <h3 style="margin: 10px 0;"><%= rs.getString("name") %></h3>
            <p style="color: #888; font-size: 1.2em;">$<%= rs.getString("price") %></p>
            
            <form method="post">
                <input type="hidden" name="itemName" value="<%= rs.getString("name") %>">
                <input type="hidden" name="itemPrice" value="<%= rs.getString("price") %>">
                <button type="submit" class="btn-add">Add to Cart</button>
            </form>
        </div>
    <% 
                }
                con.close(); // Close ONLY after all loops are finished
            } catch (Exception e) { 
                out.print("SQL Error: " + e.getMessage()); 
            }
        }
    %>
</div>

</body>
</html>