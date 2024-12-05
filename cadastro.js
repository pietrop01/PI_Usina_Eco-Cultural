document.getElementById("cadastroBotao").addEventListener("click", async () => {
  const nome = document.getElementById("nome_input").value.trim();
  const email = document.getElementById("email_input").value.trim();
  const senha = document.getElementById("senha_input").value.trim();
  const confirmarSenha = document
    .getElementById("confirmar_senha_input")
    .value.trim();

  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });

    if (!response.ok) {
      // Exibe o status e mensagem de erro retornada pelo servidor
      const error = await response.text();
      throw new Error(`Erro ${response.status}: ${error}`);
    }

    const data = await response.json();
    alert(data.message); // Mensagem de sucesso
    window.location.href = "/login.html"; // Redireciona para a página de login
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao tentar cadastrar: " + error.message);
  }
});
