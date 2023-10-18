
let clientes = [];


function cadastrarCliente() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  
  clientes.push({ nome, email });

  // Limpa os campos após o cadastro
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';

  exibirClientes();
}

// Função para exibir os clientes na tabela
function exibirClientes() {
  const tabela = document.getElementById('tabelaClientes');
  const tbody = tabela.querySelector('tbody');
  tbody.innerHTML = '';

  for (const cliente of clientes) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.email}</td>
    `;
    tbody.appendChild(row);
  }
}