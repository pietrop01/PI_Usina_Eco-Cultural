document.getElementById("logarBotao").addEventListener("click", async () => {
  const email = document.getElementById("email_input").value;
  const senha = document.getElementById("senha_input").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data.user));
      alert(data.message);
      window.location.href = "perfil.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Erro ao tentar fazer login. Tente novamente.");
  }
});
