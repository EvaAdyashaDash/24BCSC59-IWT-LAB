<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>

<head>
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>

<body class="bg-image">

<%
    String msg = "";

    if(request.getMethod().equalsIgnoreCase("POST")) {

        String firstName = request.getParameter("regFirstName");
        String lastName = request.getParameter("regLastName");
        String dob = request.getParameter("regDob");
        String email = request.getParameter("regEmail");
        String password = request.getParameter("regPassword");
        String confirmPassword = request.getParameter("regConfirmPassword");
        String phone = request.getParameter("regPhone");
        String address = request.getParameter("regAddress");
        String pincode = request.getParameter("regPincode");

        if(password != null && password.equals(confirmPassword)) {

            Connection con = null;
            PreparedStatement ps = null;

            try {
                Class.forName("org.postgresql.Driver");

                // ✅ YOUR CONNECTION
                con = DriverManager.getConnection(
                    "jdbc:postgresql://192.168.1.17:5432/cse_db24",
                    "24bcsc59",
                    "24bcsc59"
                );

                String query = "INSERT INTO signin(first_name,last_name,dob,email,password,confirmPassword,phone,address,pincode) VALUES (?,?,?,?,?,?,?,?,?)";

                ps = con.prepareStatement(query);
                ps.setString(1, firstName);
                ps.setString(2, lastName);
                ps.setString(3, dob);
                ps.setString(4, email);
                ps.setString(5, password);
                ps.setString(6, confirmPassword);
                ps.setString(7, phone);
                ps.setString(8, address);
                ps.setString(9, pincode);

                int i = ps.executeUpdate();

                if(i > 0){
                    msg = "Registration Successful!";
                } else {
                    msg = "Registration Failed!";
                }

            } catch(Exception e){
                msg = "Error: " + e.getMessage();
            } finally {
                if(ps != null) ps.close();
                if(con != null) con.close();
            }

        } else {
            msg = "Passwords do not match!";
        }
    }
%>

<button onclick="window.location.href='index.html'" style="margin: 10px;">🔙Back to Home</button>

<div class="login-box">
  <h2>Login / Register</h2>

  <!-- ✅ FORM SUBMITS TO SAME JSP -->
  <form method="post">
    <input type="text" name="regFirstName" placeholder="First Name" required><br>
    <input type="text" name="regLastName" placeholder="Last Name" required><br>
    <input type="date" name="regDob" required><br>
    <input type="email" name="regEmail" placeholder="Email" required><br>
    <input type="password" name="regPassword" placeholder="Password" required><br>
    <input type="password" name="regConfirmPassword" placeholder="Confirm Password" required><br>
    <input type="tel" name="regPhone" placeholder="Phone Number" required><br>
    <input type="text" name="regAddress" placeholder="Address" required><br>
    <input type="text" name="regPincode" placeholder="Pincode" required><br>

    <button type="submit">Register</button>
  </form>

  <!-- ✅ MESSAGE DISPLAY -->
  <p style="color:red;"><%= msg %></p>

</div>

</body>
</html>