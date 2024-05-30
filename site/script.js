const correctPassword = "Glam24-Press#2"; // Cambia esta línea por la contraseña deseada
const expirationTime = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
        const now = new Date().getTime();
        localStorage.setItem("authenticated", now + expirationTime);
        showMainContent();
    } else {
        alert("Contraseña incorrecta");
    }
}

function showMainContent() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

function checkAuthentication() {
    const authenticated = localStorage.getItem("authenticated");
    const now = new Date().getTime();
    if (authenticated && now < authenticated) {
        showMainContent();
    } else {
        localStorage.removeItem("authenticated");
        document.getElementById("loginContainer").style.display = "block";
    }
}

// Verificar la autenticación al cargar la página
checkAuthentication();
