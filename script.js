// Rolagem suave ao clicar nos links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('form-discord').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const detalhes = document.getElementById('detalhes').value;
  const mensagem = document.getElementById('mensagem').value;

  const conteudo = {
    content: `🎨 **Novo Pedido de Logo**
**Nome:** ${nome}
**Detalhes da Logo:** ${detalhes}
**Mensagem Adicional:** ${mensagem || "Nenhuma"}`
  };

  fetch('https://discordapp.com/api/webhooks/1386534142589538406/Diqkm6p7r2oX8u6ghXfOqKrUlQ3gWJKNQiBEyjOl79fzcWMJaNKEyYy2csw0eTtUS9bj', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(conteudo)
  })
  .then(res => {
    if (res.ok) {
      document.getElementById('resposta').textContent = "Pedido enviado com sucesso!";
      document.getElementById('form-discord').reset();
    } else {
      document.getElementById('resposta').textContent = "Erro ao enviar pedido.";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById('resposta').textContent = "Erro de conexão com o Discord.";
  });
});

