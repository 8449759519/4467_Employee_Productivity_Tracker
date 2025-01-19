const baseUrl = "http://localhost:5000/traker/";

const userId = localStorage.getItem("userId");
    // Fetch data from API
    async function fetchTodoItems(userId) {
      try {
        const apiUrl = `${baseUrl}${userId}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data from API");

        const { data } = await response.json();

        // Call a function to render the fetched data
        renderTodoItems(data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    // Render tasks
    function renderTodoItems(items) {
      const todoContainer = document.getElementById("todoContainer");
      todoContainer.innerHTML = ""; // Clear container

      items.forEach(item => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        // Assign priority class
        if (item.priority.toLowerCase() === "high") {
          todoItem.classList.add("high");
        } else if (item.priority.toLowerCase() === "medium") {
          todoItem.classList.add("medium");
        } else {
          todoItem.classList.add("low");
        }

        todoItem.innerHTML = `
          <div>
            <div class="todo-title">${item.title}</div>
            <div class="todo-reference">Reference: ${item.reference}</div>
            <div class="todo-description">${item.description}</div>
          </div>
          <div class="priority-indicator">
            <span class="priority-label">${item.priority}</span>
            <div class="priority-tube" style="background-color: ${
              item.priority.toLowerCase() === "high" ? "red" : 
              item.priority.toLowerCase() === "medium" ? "orange" : "green"
            }"></div>
          </div>
        `;

        todoContainer.appendChild(todoItem);
      });
    }

    // Initialize
    fetchTodoItems(userId);

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