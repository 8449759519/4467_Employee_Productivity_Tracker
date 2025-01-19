async function addTask(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("User ID is missing. Please log in again.");
    return; // Exit the function if userId is not found
  }
  // Fetch the values from input fields
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value.toLowerCase();
  const reference = document.getElementById("reference").value;
  const description = document.getElementById("description").value;

  // Create data object
  const taskData = {
    title,
    priority,
    reference,
    description,
    userId,
  };
  console.log(taskData); // Inspect the data before sending

  try {
    // Send data to the API
    const response = await fetch("http://localhost:5000/traker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    // Handle response
    if (response.ok) {
      const result = await response.json();
      alert("Task added successfully!");
      window.location.href = "/front_end/dashboard/dashboard.html";
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while adding the task.");
  }
}
