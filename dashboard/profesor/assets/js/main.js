function valideazaLogin() {
    const email = document.getElementById("email").value;
    const parola = document.getElementById("parola").value;
    const rol = document.getElementById("rol").value;
  
    if (email === "" || parola === "" || rol === "") {
      alert("Toate câmpurile sunt obligatorii.");
      return false;
    }
  
    // Simulare redirecționare în funcție de rol
    if (rol === "profesor") {
      window.location.href = "dashboard-profesor.html";
    } else if (rol === "student") {
      window.location.href = "dashboard-student.html";
    }
  
    return false; // blocăm trimiterea reală
  }
  