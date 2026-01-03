const registerForm = document.getElementById("register-form");
const message = document.getElementById("message");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!username || !email || !password) {
            message.textContent = "All fields are required.";
            message.style.color = "red";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            message.textContent = "Email already registered.";
            message.style.color = "red";
            return;
        }

        const newUser = {
            username,
            email,
            password
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "Registration successful! You can now log in.";
        message.style.color = "green";

        registerForm.reset();
    });
}

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            user => user.email === email && user.password === password
        );

        if (!user) {
            loginMessage.textContent = "Invalid email or password.";
            loginMessage.style.color = "red";
            return;
        }

        // Create session
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    });
}
