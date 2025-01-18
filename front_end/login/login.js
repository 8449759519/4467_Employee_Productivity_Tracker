let token = '';
let userId = '';

async function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      token = data.token;
      userId = data.userId;
      if (token) {
        // Redirect to dashboard
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", userId);
        window.location.href = "/front_end/dashboard/dashboard.html";
      } else {
        alert(data.message || "Invalid login credentials");
      }
    } else {
      alert("Failed to log in. Please try again.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const storedToken = localStorage.getItem("authToken");
//   if (storedToken) {
//     token = storedToken;
//     // Redirect to dashboard if already logged in
//     window.location.href = "/front_end/dashboard/dashboard.html";
//   }
// });

