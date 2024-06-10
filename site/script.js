const expirationTime = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

function confirmUse() {
    const checkbox = document.getElementById("confirmationCheckbox");
    if (checkbox.checked) {
        const now = new Date().getTime();
        localStorage.setItem("useConfirmed", now + expirationTime);
        document.getElementById("confirmationContainer").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Debes confirmar que has leído y aceptado los términos.");
    }
}

function checkConfirmation() {
    const useConfirmed = localStorage.getItem("useConfirmed");
    const now = new Date().getTime();
    if (useConfirmed && now < useConfirmed) {
        document.getElementById("confirmationContainer").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        localStorage.removeItem("useConfirmed");
        document.getElementById("confirmationContainer").style.display = "block";
    }
}

// Verificar la confirmación al cargar la página
checkConfirmation();


// Mostrar el contenedor de confirmación al cargar la página
document.getElementById("confirmationContainer").style.display = "block";


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
