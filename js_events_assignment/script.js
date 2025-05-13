document.addEventListener("DOMContentLoaded", function () {
    // Form validation
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let valid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required!";
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            document.getElementById("emailError").textContent = "Enter a valid email!";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (valid) {
            document.getElementById("message").textContent = "Form submitted successfully!";
            document.getElementById("message").style.color = "green";
        }
    });

    // Interactive button event listener
    document.getElementById("interactiveButton").addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
    });

    document.getElementById("interactiveButton").addEventListener("mouseout", function () {
        this.style.backgroundColor = "blue";
    });
});