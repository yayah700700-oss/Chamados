'use strict'

function criarCard(chamado) {
  //Criando div chamados
  const card = document.createElement('div')
  card.className = 'card'

  //Pegando nome do usuario e mostrando em formato de texto
  const titulo = document.createElement ('h2')
  titulo.textContent = chamado.titulo

  //Pegando conteudo do chamado e mostrando em formato de texto
  const usuario = document.createElement ('h3')
  usuario.textContent = chamado.usuario

  //Pegando prioridade do chamado e mostrando em formato de texto
  const prioridade = document.createElement('span')
  prioridade.textContent = `Prioridade: ${chamado.prioridade}`

  //Pegando status do chamado e mostrando em formato de texto
  const status = document.createElement('span')
  status.textContent = `Status: ${chamado.status}`


  //Armazenando conteudo obtido anteriormente da div
  card.append(titulo, usuario, prioridade, status)

  // Para alterar CSS dos cards a partir da prioridade
  if(chamado.prioridade === "Crítica"){
    card.classList.add('cardCriticaVermelho')
  }

  else if(chamado.prioridade === "Alta"){
    card.classList.add('cardAltaLaranja')
  }

  else if(chamado.prioridade === "Média"){
    card.classList.add('cardMediaAmarela')
  }

  else{
    card.classList.add('cardBaixaVerde')
  }

  //Retornando div
  return card

}

// Criando função para mapear onde as divs serão adicionadas

function carregarChamados (chamadosCard) {

 const cards = chamadosCard.map(criarCard)

 const container = document.getElementById('chamado-container')

 container.replaceChildren(...cards)

}

// Pesquisa por nome

function pesquisarChamadoPorNome(nome) {

  const chamadosFiltrados = chamados.filter(
      chamado => chamado.usuario.includes(nome)
  )

  carregarChamados(chamadosFiltrados)
}

const botaoNome = document.getElementById('botaoNome')

botaoNome.onclick = () => {

  const nome = document.getElementById('pesquisaChamadoPorNome').value

  pesquisarChamadoPorNome(nome)
}

carregarChamados(chamados)

// Voltar ao padrão com todos os chamados

const botaoTodos = document.getElementById('todos')

botaoTodos.onclick = () => {
  criarCard(chamado)
}

// Filtro para prioridade e status

const prioridadeFiltro = document.getElementById('prioridadeFiltro');
const statusFiltro = document.getElementById('statusFiltro')

function filtrarChamados() {
  const prioridadeEscolhida = prioridadeFiltro.value;
  const statusEscolhido = statusFiltro.value;

  const chamadosFiltrados = chamados.filter(chamado => {

    const prioridade = chamado.prioridade === prioridadeEscolhida;
    
    const status = chamado.status === statusEscolhido;

    return prioridade && status;
  });

  carregarChamados(chamadosFiltrados);
}

if (prioridadeFiltro && statusFiltro) {
  prioridadeFiltro.onchange = filtrarChamados;
  statusFiltro.onchange = filtrarChamados;
}


