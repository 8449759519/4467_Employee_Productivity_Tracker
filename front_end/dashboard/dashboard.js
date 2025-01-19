document
  .getElementById("createTaskButton")
  .addEventListener("click", function () {
    window.location.href = "/front_end/createTask/createTask.html";
  });

document.getElementById("viewTask").addEventListener("click", function () {
  window.location.href = "/front_end/viewTask/viewTask.html";
});

function handleLogout() {
  // Remove the token from localStorage
  localStorage.removeItem("authToken");
  window.location.href = "/front_end/login/index.html";
}
document.getElementById("logoutButton").addEventListener("click", handleLogout);
const token = localStorage.getItem("authToken");
if (!token) {
  // Redirect to login page if token is not found
  window.location.href = "/front_end/login/index.html";
}
