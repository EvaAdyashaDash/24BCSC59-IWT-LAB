let products = [
  { name: "Dress", price: 2500, img: "https://th.bing.com/th/id/OIP.YVTUlNXY83xrOktJ463bygHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Bodycon", price: 1200, img: "https://th.bing.com/th/id/OIP.52GTB4YG-gYSK0ReKYP91AHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "A-line Dress", price: 999, img: "https://th.bing.com/th/id/OIP.y1x_pMAvH2Bg2sOyWHOYJwHaKG?w=208&h=352&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Midi Dress", price: 1499, img: "https://th.bing.com/th/id/OIP.rndq1AKNh-W9822K0vz-jQHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Ruffle Dress", price: 1100, img: "https://th.bing.com/th/id/OIP.5kl8TciUepDPm9o8qcL0tAHaIX?w=208&h=235&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Shoes", price: 2000, img: "https://th.bing.com/th/id/OIP.YsPMd0Zvg_dIc_W8LKurQAHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Sandals", price: 1000, img: "https://th.bing.com/th/id/OIP.mGCIkPtil3rAz839_oxdFwHaHW?w=186&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Heels", price: 4500, img: "https://th.bing.com/th/id/OIP.hEjJEVC7zzMc72XaRY-kMwHaLH?w=123&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Crocs", price: 799, img: "https://th.bing.com/th/id/OIP.IdY_XCYwCgUhqytC6VcHJwHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Boots", price: 1999, img: "https://th.bing.com/th/id/OIP.52s2z0pZBsK2DI_dKPOvQAHaHa?w=191&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Sunglasses", price: 499, img: "https://th.bing.com/th/id/OIP.zzpuL1UVaSokoDSPwfGlUwHaIA?w=183&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Bag", price: 1500, img: "https://th.bing.com/th/id/OIP.9TgxHs04puXA-piV-bpVqwHaHa?w=202&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Mini-Bag", price: 1700, img: "https://th.bing.com/th/id/OIP.-TbRP-_rXSmOVKOZqWwVkwHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Tote-Bag", price: 399, img: "https://th.bing.com/th/id/OIP.2I4taWRItPIfokfygIpBiAHaJ3?w=148&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Sling-Bag", price: 2200, img: "https://th.bing.com/th/id/OIP.61flXgGNMZPKLz4bK9x8fQHaHa?w=208&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Watch", price: 2500, img: "https://th.bing.com/th/id/OIP.bzVRO-e9NuoiM3i4Zr7PKwHaLH?w=123&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Earings", price: 899, img: "https://th.bing.com/th/id/OIP.7LJEJyn936vD4dji6QbhywHaHa?w=202&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Necklace", price: 699, img: "https://th.bing.com/th/id/OIP.ev5vcxeueQASy2MxZ8YCZgHaHa?w=192&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Rings", price: 1000, img: "https://th.bing.com/th/id/OIP.W5mmF2SNECRLmdde_zW7pAHaHa?w=204&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Bracelet", price: 500, img: "https://th.bing.com/th/id/OIP.raHwd5aIhVMBXjz4ewfDaAHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Trendy Top", price: 600, img: "https://th.bing.com/th/id/OIP.8UkbCg6zq7Sd6V_tKlZipQHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Graphic T-Shirt", price: 400, img: "https://th.bing.com/th/id/OIP.lqug40VuTjvtQrvCA9Xl3QHaJ7?w=208&h=280&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Shirts", price: 599, img: "https://th.bing.com/th/id/OIP.Lyx01ISh6hIKBD3w2CNepgHaKW?w=208&h=291&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Fitted top", price: 700, img: "https://th.bing.com/th/id/OIP.LKh8UulcDr_oYreZhjmksQHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Crop top", price: 649, img: "https://th.bing.com/th/id/OIP.er0q-UzJi5GceY1wK_zb_AHaJo?w=208&h=271&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Classic Jeans", price: 1500, img: "https://th.bing.com/th/id/OIP.hOx7QMOmzSmvVkSHRItIPwHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Baggy Jeans", price: 1750, img: "https://th.bing.com/th/id/OIP.wZbUewG1PT6RCADXCOLP5AHaLf?w=200&h=311&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Straight fit Jeans", price: 1500, img: "https://th.bing.com/th/id/OIP.usNk89pv5nYb7Y16A6npWQHaNI?w=187&h=332&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Wide-leg Jeans", price: 1850, img: "https://th.bing.com/th/id/OIP.jgTxxbNKZdNH3StmKy1PPwHaJQ?w=208&h=260&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Cargo Jeans", price: 1100, img: "https://th.bing.com/th/id/OIP.MSBbdEXKLq-5_iWXy8ftPAHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Bootcut Jeans", price: 1300, img: "https://th.bing.com/th/id/OIP.336Hhbg5_OsbWkTdPzkgWwHaJQ?w=208&h=260&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Trouser", price: 999, img: "https://th.bing.com/th/id/OIP.sGkYS6inFvTEMldppmqIhAHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Leather Jacket", price: 3000, img: "https://th.bing.com/th/id/OIP.S44ZHYmYUq0RsLerQiqkBAHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Denim Skirt", price: 800, img: "https://th.bing.com/th/id/OIP.PLEpAVIg8036qwgbTpFJVgHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Mermaid Skirt", price: 1000, img: "https://th.bing.com/th/id/OIP.ChNgrZBP15bgodnKXlPMhgHaKl?w=208&h=297&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Pencil Skirt", price: 600, img: "https://th.bing.com/th/id/OIP.wiRdIgs39R7iX_-Aw8DEFgHaMz?w=190&h=328&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Jumpsuits", price: 1400, img: "https://th.bing.com/th/id/OIP.IlUe55UZvNk5WUlnsx_ZkwHaNZ?w=185&h=336&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Co-ord set(top with pant)", price: 800, img: "https://th.bing.com/th/id/OIP.poMQyRplzJQW5Z0Hy_FVEgHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: " Co-ord set(top with skirt)", price: 1700, img: "https://th.bing.com/th/id/OIP.KTGqb2i1xoaeEN9fdNNRLAHaNZ?w=185&h=336&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Vest Coat", price: 2300, img: "https://th.bing.com/th/id/OIP.CNQNBGYrCA_ur6Yl_mQCIQHaMi?w=192&h=325&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Sweater", price: 1200, img: "https://th.bing.com/th/id/OIP.bvSIDavVJcjKkNgCCivULQHaLW?w=201&h=309&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Hoodie", price: 1199, img: "https://th.bing.com/th/id/OIP.wbjf4DF1VFxFvNe6AOOrhAHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" },
  { name: "Jeans Jacket", price: 1800, img: "https://th.bing.com/th/id/OIP.WLIvQhXEtDyMBgRhUNShSwHaLE?w=204&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" }
];

// Add metadata for sorting and filtering
products.forEach((p, index) => {
  p.popularity = (index * 7) % 100; // pseudo-random popularity 0-99
  p.isNew = index % 4 === 0;
  p.addedDate = new Date(2026, 3, 19 - (index % 10));
  p.rating = (3.8 + (index * 3 % 13) / 10).toFixed(1);
});

let currentSort = 'default';
let currentPriceFilter = 'all';

function applyFiltersAndSort() {
  let filtered = [...products]; // copy array

  // Apply Search
  let searchInput = document.querySelector('input[placeholder="Search..."]');
  if (searchInput && searchInput.value) {
    let value = searchInput.value.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(value));
  }

  // Apply Price Filter
  if (currentPriceFilter === 'under1000') {
    filtered = filtered.filter(p => p.price < 1000);
  } else if (currentPriceFilter === '1000to2000') {
    filtered = filtered.filter(p => p.price >= 1000 && p.price <= 2000);
  } else if (currentPriceFilter === 'over2000') {
    filtered = filtered.filter(p => p.price > 2000);
  }

  // Apply Sort
  if (currentSort === 'priceAsc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'priceDesc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'popularity') {
    filtered.sort((a, b) => b.popularity - a.popularity);
  } else if (currentSort === 'newest') {
    filtered.sort((a, b) => b.addedDate - a.addedDate);
  }

  loadProducts(filtered);
}

function handleSortChange(value) {
  currentSort = value;
  applyFiltersAndSort();
}

function handleFilterChange(value) {
  currentPriceFilter = value;
  applyFiltersAndSort();
}

let cart = (JSON.parse(localStorage.getItem("cart")) || []).filter(item => item !== null && item !== undefined);
let wishlist = (JSON.parse(localStorage.getItem("wishlist")) || []).filter(item => item !== null && item !== undefined);
let selectedSizes = {};

function selectSize(productName, size, btnElement) {
  selectedSizes[productName] = size;
  let siblings = btnElement.parentElement.children;
  for (let btn of siblings) {
    btn.dataset.selected = "false";
    btn.style.background = 'transparent';
    btn.style.color = '#ff6b6b';
  }
  btnElement.dataset.selected = "true";
  btnElement.style.background = '#ff6b6b';
  btnElement.style.color = 'white';
}

/* Load Products */
function loadProducts(list) {
  let container = document.getElementById("productList");
  if (!container) return;

  container.innerHTML = "";

  let categories = {
    "Dresses": [],
    "Jackets": [],
    "Jeans & Trousers": [],
    "Skirts": [],
    "Shoes": [],
    "Accessories": [],
    "Tops, Sets & Outerwear": []
  };

  list.forEach((p) => {
    let lowerName = p.name.toLowerCase();

    // Determine category
    if (lowerName.includes("dress") || lowerName.includes("bodycon")) {
      categories["Dresses"].push(p);
    } else if (lowerName.includes("jacket") || lowerName.includes("coat")) {
      categories["Jackets"].push(p);
    } else if (lowerName.includes("jeans") || lowerName.includes("trouser")) {
      categories["Jeans & Trousers"].push(p);
    } else if (lowerName.includes("skirt")) {
      categories["Skirts"].push(p);
    } else if (lowerName.includes("shoe") || lowerName.includes("sandal") || lowerName.includes("heel") || lowerName.includes("croc") || lowerName.includes("boot")) {
      categories["Shoes"].push(p);
    } else if (lowerName.includes("sunglass") || lowerName.includes("ring") || lowerName.includes("bracelet") || lowerName.includes("watch") || lowerName.includes("necklace") || lowerName.includes("earing") || lowerName.includes("bag")) {
      categories["Accessories"].push(p);
    } else {
      categories["Tops, Sets & Outerwear"].push(p);
    }
  });

  for (let cat in categories) {
    if (categories[cat].length > 0) {
      let sectionHTML = `<div style="margin: 40px 20px 10px 20px;"><h2 style="border-bottom: 2px solid #ff7eb3; display: inline-block; padding-bottom: 5px;">${cat}</h2></div>`;
      let productsHTML = `<div class="products">`;

      categories[cat].forEach((p) => {
        let lowerName = p.name.toLowerCase();
        let sizes = [];
        if (lowerName.includes("dress") || lowerName.includes("bodycon") || lowerName.includes("top") || lowerName.includes("jeans") || lowerName.includes("shirt") || lowerName.includes("trouser") || lowerName.includes("skirt") || lowerName.includes("jacket") || lowerName.includes("jumpsuit") || lowerName.includes("set") || lowerName.includes("coat") || lowerName.includes("sweater") || lowerName.includes("hoodie")) {
          sizes = ["S", "M", "L", "XL"];
        } else if (lowerName.includes("sunglass") || lowerName.includes("ring") || lowerName.includes("necklace") || lowerName.includes("bracelet") || lowerName.includes("watch") || lowerName.includes("bag") || lowerName.includes("earing")) {
          sizes = ["Free Size"];
        } else if (lowerName.includes("shoe") || lowerName.includes("sandal") || lowerName.includes("heel") || lowerName.includes("croc") || lowerName.includes("boot")) {
          sizes = ["5", "6", "7", "8", "9"];
        }

        let sizeHTML = "";
        if (sizes.length > 0) {
          let sizeButtons = sizes.map(s => `<span onclick="selectSize('${p.name.replace(/'/g, "\\'")}', '${s}', this)" data-selected="false" style="display: inline-block; padding: 4px 10px; margin: 3px; border: 1px solid #ff6b6b; border-radius: 5px; font-size: 0.85em; font-weight: 600; color: #ff6b6b; background: transparent; cursor: pointer; transition: 0.3s;" onmouseover="this.style.background='#ff6b6b'; this.style.color='white'" onmouseout="if(this.dataset.selected !== 'true') { this.style.background='transparent'; this.style.color='#ff6b6b'; }">${s}</span>`).join("");
          sizeHTML = `<div style="margin-bottom: 12px; margin-top: -5px;">${sizeButtons}</div>`;
        }

        productsHTML += `
          <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <div style="color: #ffbc00; font-size: 1.1em; margin-bottom: 5px;">
              ${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))} 
              <span style="color: #777; font-size: 0.8em; margin-left: 4px;">(${p.rating})</span>
            </div>
            <p style="margin-bottom: 5px;">₹${p.price}</p>
            ${sizeHTML}
            <button onclick="addToCart('${p.name.replace(/'/g, "\\'")}', this)">🛒 Add to Cart </button>
            <button onclick="addToWishlist('${p.name.replace(/'/g, "\\'")}', this)">❤️ Wishlist</button>
          </div>
        `;
      });

      productsHTML += `</div>`;
      container.innerHTML += sectionHTML + productsHTML;
    }
  }
}

/* Search */
function searchProduct(value) {
  applyFiltersAndSort();
}

/* Cart */
function addToCart(i, btn) {
  if (btn && (btn.innerText.includes("Go to Cart") || btn.innerText.includes("Added to Cart"))) {
    window.location.href = "cart.html";
    return;
  }

  let product;
  if (typeof i === 'string') {
    product = products.find(p => p.name === i);
  } else {
    product = products[i];
  }

  if (product) {
    let lowerName = product.name.toLowerCase();
    let hasSize = (lowerName.includes("dress") || lowerName.includes("bodycon") || lowerName.includes("top") || lowerName.includes("jeans") || lowerName.includes("shirt") || lowerName.includes("trouser") || lowerName.includes("skirt") || lowerName.includes("jacket") || lowerName.includes("jumpsuit") || lowerName.includes("set") || lowerName.includes("coat") || lowerName.includes("sweater") || lowerName.includes("hoodie") || lowerName.includes("sunglass") || lowerName.includes("ring") || lowerName.includes("necklace") || lowerName.includes("bracelet") || lowerName.includes("watch") || lowerName.includes("bag") || lowerName.includes("earing") || lowerName.includes("shoe") || lowerName.includes("sandal") || lowerName.includes("heel") || lowerName.includes("croc") || lowerName.includes("boot"));
    let size = selectedSizes[product.name];
    if (hasSize && !size) {
      alert("Please select a size first!");
      return;
    }

    let cartItem = { ...product, size: size || "N/A" };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    if (btn) {
      btn.innerText = "🛒 Go to Cart";
      btn.style.background = "#4CAF50";
      btn.style.color = "white";
    }
  } else {
    alert("Product not found!");
  }
}

/* login */
function loginUser() {
  let firstName = document.getElementById("regFirstName") ? document.getElementById("regFirstName").value : "";
  let lastName = document.getElementById("regLastName") ? document.getElementById("regLastName").value : "";
  let email = document.getElementById("regEmail") ? document.getElementById("regEmail").value : document.querySelector("input[type='email']").value;
  let password = document.getElementById("regPassword") ? document.getElementById("regPassword").value : document.querySelector("input[type='password']").value;
  let confirmPassword = document.getElementById("regConfirmPassword") ? document.getElementById("regConfirmPassword").value : "";
  let phone = document.getElementById("regPhone") ? document.getElementById("regPhone").value : "";
  let address = document.getElementById("regAddress") ? document.getElementById("regAddress").value : "";
  let errorMsg = document.getElementById("passwordError");

  let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long, and contain at least one letter, one number, and one special character.");
    return false;
  }

  if (confirmPassword && password !== confirmPassword) {
    if (errorMsg) errorMsg.style.display = "block";
    return false;
  }

  if (errorMsg) errorMsg.style.display = "none";

  let pincode = document.getElementById("regPincode") ? document.getElementById("regPincode").value : "";

  // Save to localStorage
  let userProfile = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: address,
    pincode: pincode,
    password: password
  };
  localStorage.setItem("currentUser", JSON.stringify(userProfile));
  sessionStorage.setItem("sessionActive", "true");

  alert("Login Successful 🎉\nWelcome to SAVAYA");
  window.location.href = "index.html";
  return false;
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("sessionActive");
  window.location.reload();
}

function checkLoginState() {
  let currentUserStr = localStorage.getItem("currentUser");
  let loginSection = document.getElementById("loginSection");
  let profileSection = document.getElementById("profileSection");

  // Update Navigation across all pages
  let navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === "login.html") {
      if (currentUserStr) {
        link.innerHTML = "Profile👤";
      } else {
        link.innerHTML = "Login👤";
      }
    }
  });

  let userProfileDisplay = document.getElementById("userProfileDisplay");
  let userInitials = document.getElementById("userInitials");
  let userWelcomeName = document.getElementById("userWelcomeName");

  if (currentUserStr) {
    let user = JSON.parse(currentUserStr);
    if (userProfileDisplay && userInitials && userWelcomeName) {
      userProfileDisplay.style.display = "flex";
      userWelcomeName.innerText = "Hi, " + (user.firstName || "User");
      userInitials.innerText = (user.firstName ? user.firstName.charAt(0).toUpperCase() : "U");
    }
  }

  if (loginSection && profileSection) {
    if (currentUserStr) {
      // User is logged in
      loginSection.style.display = "none";
      profileSection.style.display = "block";

      let user = JSON.parse(currentUserStr);
      document.getElementById("profileName").textContent = (user.firstName || "") + " " + (user.lastName || "");
      document.getElementById("profileEmail").textContent = user.email || "";
      document.getElementById("profilePhone").textContent = user.phone || "";
      document.getElementById("profileAddress").textContent = user.address || "";

      loadOrderHistory();
    } else {
      // User is not logged in
      loginSection.style.display = "block";
      profileSection.style.display = "none";
    }
  }
}

function loadOrderHistory() {
  let container = document.getElementById("orderHistoryContainer");
  if (!container) return;

  let currentUserStr = localStorage.getItem("currentUser");
  let user = currentUserStr ? JSON.parse(currentUserStr) : null;
  let historyKey = user && user.email ? "orderHistory_" + user.email : "orderHistory";

  let historyStr = localStorage.getItem(historyKey);
  if (!historyStr) {
    container.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  let history = JSON.parse(historyStr);
  if (history.length === 0) {
    container.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  container.innerHTML = "";
  // Display latest orders first
  history.slice().reverse().forEach((order, index) => {
    let orderDiv = document.createElement("div");
    orderDiv.style.borderBottom = "1px solid #ddd";
    orderDiv.style.paddingBottom = "15px";
    orderDiv.style.marginBottom = "15px";

    let dateStr = new Date(order.date).toLocaleString();
    let total = 0;

    let itemsHtml = order.items.map(item => {
      total += item.price;
      return `<div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
        <img src="${item.img}" style="width: 40px; height: 50px; object-fit: contain; border-radius: 4px;">
        <span style="font-size: 0.9em;">${item.name} ${item.size && item.size !== "N/A" ? "(Size: " + item.size + ")" : ""} - ₹${item.price}</span>
      </div>`;
    }).join("");

    orderDiv.innerHTML = `
      <h4 style="margin: 0 0 10px 0; color: #333;">Order on ${dateStr}</h4>
      ${itemsHtml}
      <p style="font-weight: bold; margin-top: 10px; color: #ff6b6b;">Total: ₹${total}</p>
      <button onclick="alert('Tracking Information: Your order is being processed and will be shipped shortly! 🚚')" style="background: #4CAF50; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; font-weight: bold;">Track Order 📍</button>
    `;

    container.appendChild(orderDiv);
  });
}

/* Wishlist */
function addToWishlist(i, btn) {
  if (btn && (btn.innerText.includes("Go to Wishlist") || btn.innerText.includes("Added to Wishlist"))) {
    window.location.href = "wishlist.html";
    return;
  }

  let product;
  if (typeof i === 'string') {
    product = products.find(p => p.name === i);
  } else {
    product = products[i];
  }

  if (product) {
    let lowerName = product.name.toLowerCase();
    let hasSize = (lowerName.includes("dress") || lowerName.includes("bodycon") || lowerName.includes("top") || lowerName.includes("jeans") || lowerName.includes("shirt") || lowerName.includes("trouser") || lowerName.includes("skirt") || lowerName.includes("jacket") || lowerName.includes("jumpsuit") || lowerName.includes("set") || lowerName.includes("coat") || lowerName.includes("sweater") || lowerName.includes("hoodie") || lowerName.includes("sunglass") || lowerName.includes("ring") || lowerName.includes("necklace") || lowerName.includes("bracelet") || lowerName.includes("watch") || lowerName.includes("bag") || lowerName.includes("earing") || lowerName.includes("shoe") || lowerName.includes("sandal") || lowerName.includes("heel") || lowerName.includes("croc") || lowerName.includes("boot"));
    let size = selectedSizes[product.name];
    if (hasSize && !size) {
      alert("Please select a size first!");
      return;
    }

    let wishlistItem = { ...product, size: size || "N/A" };
    wishlist.push(wishlistItem);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    if (btn) {
      btn.innerText = "❤️ Go to Wishlist";
      btn.style.background = "#ff4757";
      btn.style.color = "white";
    }
  } else {
    alert("Product not found!");
  }
}

/* Show Cart placeholder */

/* Show Wishlist */
function loadWishlist() {
  let list = document.getElementById("wishlistItems");
  if (!list) return;

  list.innerHTML = "";
  if (wishlist.length === 0) {
    list.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>Your wishlist is empty 💔</p>";
    return;
  }

  wishlist.forEach((item, i) => {
    let div = document.createElement("div");
    div.className = "card";
    let sizeInfo = item.size && item.size !== "N/A" ? `<p style="margin-top: 5px; font-weight: bold; color: #ff6b6b;">Size: ${item.size}</p>` : '';
    div.innerHTML = `
      <img src="${item.img}" style="width: 100%; border-radius: 8px; object-fit: contain; aspect-ratio: 1/1; background: transparent;">
      <h3>${item.name}</h3>
      <div style="color: #ffbc00; font-size: 1.1em; margin-bottom: 5px;">
        ${'★'.repeat(Math.round(item.rating))}${'☆'.repeat(5 - Math.round(item.rating))} 
        <span style="color: #777; font-size: 0.8em; margin-left: 4px;">(${item.rating})</span>
      </div>
      <p>₹${item.price}</p>
      ${sizeInfo}
      <button onclick="removeFromWishlist(${i})" style="background: #ff6b6b; color: white;">❌ Remove</button>
    `;
    list.appendChild(div);
  });
}

/* Remove from Wishlist */
function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  loadWishlist(); // refresh immediately
}

/* Navigation */
function goNext() {
  let currentUserStr = localStorage.getItem("currentUser");
  if (!currentUserStr) {
    window.location.href = "login.html?alert=notlogged";
  } else {
    window.location.href = "product.html";
  }
}

function verifySession() {
  let currentUserStr = localStorage.getItem("currentUser");
  if (currentUserStr && !sessionStorage.getItem("sessionActive")) {
    let user = JSON.parse(currentUserStr);
    if (!user.password) {
      // If old user without password saved, just activate session for backwards compatibility
      sessionStorage.setItem("sessionActive", "true");
      return;
    }
    createReauthModal();
  }
}

function createReauthModal() {
  if (document.getElementById("reauthModal")) return;
  let modalHTML = `
  <div id="reauthModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
      <div class="login-box" style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px; width: 90%; position: relative;">
          <h2>Welcome Back! 🔒</h2>
          <p style="margin-bottom: 20px;">Please confirm your credentials to unlock your session.</p>
          <input type="text" id="reauthEmail" placeholder="Email / Username" required style="width: calc(100% - 22px); padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px;">
          <input type="password" id="reauthPassword" placeholder="Password" required style="width: calc(100% - 22px); padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px;">
          <input type="password" id="reauthConfirmPassword" placeholder="Confirm Password" required style="width: calc(100% - 22px); padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px;">
          <p id="reauthError" style="color: #ff4757; display: none; margin-top: -5px; margin-bottom: 15px; font-weight: bold; font-size: 0.9em;">Username and saved details do not match!</p>
          <p id="reauthMatchError" style="color: #ff4757; display: none; margin-top: -5px; margin-bottom: 15px; font-weight: bold; font-size: 0.9em;">Passwords do not match!</p>
          <button onclick="confirmReauth()" style="width: 100%; padding: 12px; background: #ff7eb3; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Unlock Session</button>
          <button onclick="logoutUser()" style="width: 100%; background: #ff4757; color: white; margin-top: 10px; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Sign Out</button>
      </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function confirmReauth() {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let email = document.getElementById("reauthEmail").value.trim();
  let pass = document.getElementById("reauthPassword").value;
  let confirmPass = document.getElementById("reauthConfirmPassword").value;

  let errorMsg = document.getElementById("reauthError");
  let matchErrorMsg = document.getElementById("reauthMatchError");

  if (errorMsg) errorMsg.style.display = "none";
  if (matchErrorMsg) matchErrorMsg.style.display = "none";

  if (pass !== confirmPass) {
    if (matchErrorMsg) matchErrorMsg.style.display = "block";
    return;
  }

  if ((email === user.email || email === user.firstName) && pass === user.password) {
    sessionStorage.setItem("sessionActive", "true");
    document.getElementById("reauthModal").remove();
  } else {
    if (errorMsg) errorMsg.style.display = "block";
  }
}

function loadCheckoutData() {
  let currentUserStr = localStorage.getItem("currentUser");
  let isCheckoutPage = window.location.href.includes("checkout.html");

  if (isCheckoutPage && !currentUserStr) {
    alert("Please sign in to proceed to checkout!");
    window.location.href = "login.html";
    return;
  }

  if (currentUserStr) {
    let user = JSON.parse(currentUserStr);
    let nameField = document.getElementById("checkoutName");
    let addressField = document.getElementById("checkoutAddress");
    let pincodeField = document.getElementById("checkoutPincode");

    if (nameField) nameField.value = (user.firstName || "") + " " + (user.lastName || "");
    if (addressField) addressField.value = user.address || "";
    if (pincodeField && user.pincode) pincodeField.value = user.pincode;
    // Phone is intentionally left blank as requested
  }
}

/* Load on page */
window.onload = function () {
  verifySession();
  checkLoginState();
  loadCheckoutData();

  let isProductPage = document.getElementById("productList") !== null;
  let isHomePage = document.getElementById("recommendedItems") !== null;

  if (isProductPage) {
    applyFiltersAndSort();
  } else {
    loadProducts(products);
  }

  if (isHomePage) {
    loadRecommended();
  }

  loadCart();
  loadWishlist();

  if (window.location.href.includes("login.html") && window.location.search.includes("alert=notlogged")) {
    let alertDiv = document.getElementById("notLoggedAlert");
    if (alertDiv) {
      alertDiv.style.display = "block";
      setTimeout(() => alertDiv.style.display = "none", 5000);
    }
  }
};

/* Load Recommended Items */
function loadRecommended() {
  let container = document.getElementById("recommendedItems");
  if (!container) return;

  // Get top 4 most popular items
  let recommended = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  let productsHTML = `<div class="products">`;
  recommended.forEach((p) => {
    productsHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <div style="color: #ffbc00; font-size: 1.1em; margin-bottom: 5px;">
          ${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))} 
          <span style="color: #777; font-size: 0.8em; margin-left: 4px;">(${p.rating})</span>
        </div>
        <p style="margin-bottom: 5px;">₹${p.price}</p>
        <button onclick="addToCart('${p.name.replace(/'/g, "\\'")}', this)">🛒 Add to Cart </button>
      </div>
    `;
  });
  productsHTML += `</div>`;
  container.innerHTML = productsHTML;
}

/* Remove from Cart */
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

/* Load Cart Updated */
function loadCart() {
  let list = document.getElementById("cartItems");
  let total = 0;

  if (!list) return;

  list.innerHTML = "";

  cart.forEach((item, i) => {
    total += item.price;

    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "15px";
    li.style.padding = "10px";
    li.style.background = "rgba(255, 255, 255, 0.4)";
    li.style.borderRadius = "8px";

    let sizeInfo = item.size && item.size !== "N/A" ? ` <span style="color: #ff6b6b; font-weight: bold; margin-left: 10px;">(Size: ${item.size})</span>` : '';

    li.innerHTML = `
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="${item.img}" style="width: 60px; height: 80px; border-radius: 8px; object-fit: contain;">
        <div>
          <span style="font-weight: bold;">${item.name}</span>${sizeInfo}<br>
          <span style="color: #333;">₹${item.price}</span>
        </div>
      </div>
      <button onclick="removeFromCart(${i})" style="padding: 8px 12px; background: transparent; border: 1px solid #ff6b6b; color: #ff6b6b; border-radius: 5px; cursor: pointer; transition: 0.3s;" onmouseover="this.style.background='#ff6b6b'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='#ff6b6b'">❌</button>
    `;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = "Total: ₹" + total;
}

/* Go to Checkout */
function goCheckout() {
  let currentUserStr = localStorage.getItem("currentUser");
  if (!currentUserStr) {
    alert("Please sign in to proceed to checkout!");
    window.location.href = "login.html";
    return;
  }
  window.location.href = "checkout.html";
}

/* Place Order */
function placeOrder() {
  let currentCartStr = localStorage.getItem("cart");
  if (currentCartStr && currentCartStr !== "[]") {
    let currentUserStr = localStorage.getItem("currentUser");
    let user = currentUserStr ? JSON.parse(currentUserStr) : null;
    let historyKey = user && user.email ? "orderHistory_" + user.email : "orderHistory";

    let historyStr = localStorage.getItem(historyKey);
    let history = historyStr ? JSON.parse(historyStr) : [];
    history.push({
      date: new Date().toISOString(),
      items: JSON.parse(currentCartStr)
    });
    localStorage.setItem(historyKey, JSON.stringify(history));
  }

  localStorage.removeItem("cart");
  window.location.href = "order.html";
  return false;
}

/* Toggle Bank Details */
function toggleBankDetails() {
  let method = document.getElementById("paymentMethod").value;
  let bankDetails = document.getElementById("bankDetails");
  let upiFields = document.getElementById("upiFields");
  let cardFields = document.getElementById("cardFields");
  let bankTitle = document.getElementById("bankTitle");

  let upiId = document.getElementById("upiId");
  let cardNumber = document.getElementById("cardNumber");
  let expiryDate = document.getElementById("expiryDate");
  let cvv = document.getElementById("cvv");

  if (method === "UPI") {
    bankDetails.style.display = "block";
    bankTitle.innerText = "UPI Details";
    upiFields.style.display = "block";
    cardFields.style.display = "none";
    upiId.required = true;
    cardNumber.required = false;
    expiryDate.required = false;
    cvv.required = false;
  } else if (method === "Credit Card") {
    bankDetails.style.display = "block";
    bankTitle.innerText = "Credit Card Details";
    upiFields.style.display = "none";
    cardFields.style.display = "block";
    upiId.required = false;
    cardNumber.required = true;
    expiryDate.required = true;
    cvv.required = true;
  } else {
    bankDetails.style.display = "none";
    upiId.required = false;
    cardNumber.required = false;
    expiryDate.required = false;
    cvv.required = false;
  }
}

/* Toggle Password Visibility */
function togglePassword(inputId, iconElement) {
  let input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    iconElement.innerText = "🙈";
  } else {
    input.type = "password";
    iconElement.innerText = "👀";
  }
}