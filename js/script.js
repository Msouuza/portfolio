document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
  });
});

// fazendo o formulario ser funcional

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const mensagem = document.getElementById("mensagem-confirmacao");

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Mostrar mensagem de sucesso
        mensagem.innerHTML = "✅ Mensagem enviada com sucesso!";
        mensagem.style.color = "#00ffaa";
        mensagem.style.fontWeight = "bold";

        // Limpar os campos do formulário
        form.reset();

        // Remover a mensagem após alguns segundos
        setTimeout(() => {
          mensagem.innerHTML = "";
        }, 4000);
      });
    }
  });