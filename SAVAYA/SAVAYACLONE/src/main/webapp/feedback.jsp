<%@ page import="java.sql.*" %>
<%
    String message = "";

    if(request.getMethod().equalsIgnoreCase("POST")) {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String feedback = request.getParameter("feedback");

        Connection con = null;
        PreparedStatement ps = null;

        try {
            Class.forName("org.postgresql.Driver");

            con = DriverManager.getConnection(
                "jdbc:postgresql://192.168.1.17:5432/cse_db24",
                "24bcsc59",
                "24bcsc59"
            );

            String query = "INSERT INTO feedback(name, email, message) VALUES (?, ?, ?)";
            ps = con.prepareStatement(query);
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setString(3, feedback);

            int i = ps.executeUpdate();

            if(i > 0) {
                message = "Feedback submitted successfully!";
            } else {
                message = "Failed to submit feedback.";
            }

        } catch(Exception e) {
            message = "Error: " + e.getMessage();
        } finally {
            if(ps != null) ps.close();
            if(con != null) con.close();
        }
    }
%>

<!DOCTYPE html>
<html>
<head>
  <title>Feedback</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-image">

  <button onclick="window.location.href='index.html'" style="margin: 10px;">🔙Back to Home</button>

  <header>
    <h1>Feedback</h1>
    <nav>
      <a href="index.html">Home🌐</a>
      <a href="product.html">Products🛍️</a>
      <a href="login.jsp">Login👤</a>
      <a href="cart.html">Cart 🛒</a>
      <a href="wishlist.html">Wishlist ❤️</a>
    </nav>
  </header>

  <div class="login-box" style="width: 400px;">
    <h2>We Value Your Feedback</h2>

    <form method="post">
      <input type="text" name="name" placeholder="Your Name" required><br>
      <input type="email" name="email" placeholder="Your Email" required><br>
      <textarea name="feedback" placeholder="Your Feedback" rows="5"
        style="width: 90%; padding: 12px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px;"
        required></textarea><br>

      <button type="submit">Submit Feedback</button>
    </form>

    <p style="color: pink;"><%= message %></p>
  </div>

</body>
</html>
