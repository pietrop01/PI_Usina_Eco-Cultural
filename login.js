document.getElementById("logarBotao").addEventListener("click", async () => {
  const email = document.getElementById("email_input").value;
  const senha = document.getElementById("senha_input").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert(data.message);
      window.location.href = "/index.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao tentar fazer login. Tente novamente.");
  }
});
