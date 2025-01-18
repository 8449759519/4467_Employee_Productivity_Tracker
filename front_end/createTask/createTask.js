document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevent form from reloading the page
  
      const userId = localStorage.getItem("userId");
      // Fetch the values from input fields
      const title = document.getElementById("title").value;
      const priority = document.getElementById("priority").value;
      const reference = document.getElementById("reference").value;
      const description = document.getElementById("description").value;
  
      // Create data object
      const taskData = {
        title: title,
        priority: priority,
        reference: reference,
        description: description,
        userId: userId
      };
  
      try {
        // Send data to the API
        const response = await fetch("http://localhost:5000/traker", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(taskData)
        });
  
        // Handle response
        if (response.ok) {
          const result = await response.json();
          alert("Task added successfully!");
          // Optional: Redirect or perform another action after success
          window.location.href = "/front_end/dashboard/dashboard.html";
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the task.");
      }
    });
  });
  