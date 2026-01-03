const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
    window.location.href = "index.html";
}

const welcome = document.getElementById("welcome");
const logoutBtn = document.getElementById("logout-btn");

welcome.textContent = `Welcome, ${user.username}!`;

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});
