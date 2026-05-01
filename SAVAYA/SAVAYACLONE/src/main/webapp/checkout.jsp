<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>

<head>
    <title>Checkout</title>
    <link rel="stylesheet" href="style.css">
</head>

<body class="bg-image">
    <button onclick="window.location.href='index.html'" style="margin: 10px;">🔙Back to Home</button>

    <div class="center-page glass-panel checkout-box">
        <h1>💳 Checkout</h1>

        <form method="post">
            <input type="text" name="name" placeholder="Full Name" required><br>
            <input type="text" name="address" placeholder="Address" required><br>
            <input type="text" name="city" placeholder="City" required><br>
            <input type="number" name="pincode" placeholder="Pincode" required><br>
            <input type="tel" name="phone" placeholder="Phone Number" required><br>
            <input type="tel" name="altPhone" placeholder="Alternate Phone Number"><br>

            <h3>Payment Method</h3>
            <select name="paymentMethod" onchange="toggleBankDetails()" required>
                <option value="" disabled selected>Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select><br><br>

            <div id="bankDetails" class="bank-details" style="display: none;">
                <h4>Bank Details</h4>

                <div id="upiFields" style="display: none;">
                    <input type="text" name="upiId" placeholder="Enter UPI ID"><br>
                </div>

                <div id="cardFields" style="display: none;">
                    <input type="text" name="cardNumber" placeholder="Card Number"><br>
                    <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)"><br>
                    <input type="password" name="cvv" placeholder="CVV"><br>
                </div>
            </div>

            <button type="submit" style="width: 90%;">Place Order</button>
        </form>

        <%
            // Handle form submission
            if(request.getMethod().equalsIgnoreCase("POST")) {

                String name = request.getParameter("name");
                String address = request.getParameter("address");
                String city = request.getParameter("city");
                String pincode = request.getParameter("pincode");
                String phone = request.getParameter("phone");
                String altPhone = request.getParameter("altPhone");
                String paymentMethod = request.getParameter("paymentMethod");
                String upiId = request.getParameter("upiId");
                String cardNumber = request.getParameter("cardNumber");
                String expiryDate = request.getParameter("expiryDate");
                String cvv = request.getParameter("cvv");

                Connection con = null;
                PreparedStatement ps = null;

                try {
                    Class.forName("org.postgresql.Driver");

                    con = DriverManager.getConnection(
                        "jdbc:postgresql://192.168.1.17:5432/cse_db24",
                        "24bcsc59",
                        "24bcsc59"
                    );

                    String query = "INSERT INTO orders(name, address, city, pincode, phone, altPhone, paymentMethod, upiId, cardNumber, expiryDate, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

                    ps = con.prepareStatement(query);

                    ps.setString(1, name);
                    ps.setString(2, address);
                    ps.setString(3, city);
                    ps.setString(4, pincode);
                    ps.setString(5, phone);
                    ps.setString(6, altPhone);
                    ps.setString(7, paymentMethod);
                    ps.setString(8, upiId);
                    ps.setString(9, cardNumber);
                    ps.setString(10, expiryDate);
                    ps.setString(11, cvv);

                    int result = ps.executeUpdate();

                    if(result > 0) {
        %>
                        <h3 style="color: lightgreen;">✅ Order Placed Successfully!</h3>
        <%
                    } else {
        %>
                        <h3 style="color: red;">❌ Failed to place order.</h3>
        <%
                    }

                } catch(Exception e) {
                    out.println("<h3 style='color:red;'>Error: " + e.getMessage() + "</h3>");
                } finally {
                    if(ps != null) ps.close();
                    if(con != null) con.close();
                }
            }
        %>

    </div>

    <script>
        function toggleBankDetails() {
            let method = document.getElementsByName("paymentMethod")[0].value;

            document.getElementById("bankDetails").style.display = "block";
            document.getElementById("upiFields").style.display = "none";
            document.getElementById("cardFields").style.display = "none";

            if(method === "UPI") {
                document.getElementById("upiFields").style.display = "block";
            } else if(method === "Credit Card") {
                document.getElementById("cardFields").style.display = "block";
            } else {
                document.getElementById("bankDetails").style.display = "none";
            }
        }
    </script>

</body>
</html>