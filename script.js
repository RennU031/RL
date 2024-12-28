const validUsername = "liliz";
const validPassword = "SayaJelek";

window.onload = () => {
    const loginForm = document.getElementById("login-form");
    const loginContainer = document.getElementById("login-container");
    const birthdayContainer = document.getElementById("birthday-container");
    const greeting = document.getElementById("greeting");
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validUsername && password === validPassword) {
            loginContainer.style.display = "none";
            birthdayContainer.style.display = "block";

            setTimeout(() => {
                greeting.style.opacity = "1";
                greeting.style.transform = "scale(1)";
            }, 500);

            setTimeout(() => {
                message1.style.opacity = "1";
            }, 1000);

            setTimeout(() => {
                message2.style.opacity = "1";
            }, 1500);
        } else {
            errorMessage.textContent = "Username atau password salah!";
        }
    });
};