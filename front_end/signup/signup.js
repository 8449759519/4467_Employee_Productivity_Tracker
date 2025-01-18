// Fetch form inputs and send data to API
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Collect input values
        const name = document.querySelector(".name").value;
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        // Prepare data to send to the API
        const data = { name, email, password };

        try {
            // Send data to the API
            const response = await fetch("http://localhost:5000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert("Sign up successful!");
                // console.log("Response:", result);
                window.location.href = "/front_end/login/index.html"
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while signing up.");
        }
    });
});
