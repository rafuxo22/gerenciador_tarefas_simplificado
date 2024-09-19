document.addEventListener('DOMContentLoaded', function () {
  const listaTarefas = document.getElementById('lista-tarefas');
  const listaConcluidas = document.getElementById('lista-concluidas');
  const inputNovaTarefa = document.getElementById('nova-tarefa');
  const botaoAdicionar = document.getElementById('adicionar-tarefa');

  // Carregar tarefas salvas
  chrome.storage.sync.get(['tarefas', 'concluidas'], function (result) {
    if (result.tarefas) {
      result.tarefas.forEach(function (tarefa) {
        adicionarTarefaNaLista(tarefa);
      });
    }
    if (result.concluidas) {
      result.concluidas.forEach(function (tarefa) {
        adicionarTarefaConcluida(tarefa);
      });
    }
  });

  // Adicionar nova tarefa ao clicar no botão "Adicionar"
  botaoAdicionar.addEventListener('click', function () {
    adicionarTarefa();
  });

  // Adicionar nova tarefa ao pressionar a tecla "Enter"
  inputNovaTarefa.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      adicionarTarefa();
    }
  });

  // Função para adicionar tarefa à lista "To Do"
  function adicionarTarefa() {
    const novaTarefa = inputNovaTarefa.value.trim();
    if (novaTarefa) {
      adicionarTarefaNaLista(novaTarefa);

      // Salvar a tarefa no storage do Chrome
      chrome.storage.sync.get(['tarefas'], function (result) {
        const tarefas = result.tarefas || [];
        tarefas.push(novaTarefa);
        chrome.storage.sync.set({ tarefas: tarefas });
      });

      inputNovaTarefa.value = ''; // Limpar o campo de entrada
    }
  }

  // Função para adicionar tarefa à lista "To Do" visível
  function adicionarTarefaNaLista(tarefa) {
    const li = document.createElement('li');
    li.textContent = tarefa;

    // Criar botão para concluir tarefa
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', function () {
      concluirTarefa(tarefa, li);
    });

    li.appendChild(botaoConcluir);
    listaTarefas.appendChild(li);
  }

  // Função para mover tarefa para a lista "Done"
  function concluirTarefa(tarefa, liElemento) {
    // Remover a tarefa da lista "To Do"
    listaTarefas.removeChild(liElemento);

    // Adicionar a tarefa na lista "Done"
    adicionarTarefaConcluida(tarefa);

    // Atualizar storage para remover da lista "To Do"
    chrome.storage.sync.get(['tarefas'], function (result) {
      const tarefasAtualizadas = result.tarefas.filter(t => t !== tarefa);
      chrome.storage.sync.set({ tarefas: tarefasAtualizadas });
    });

    // Adicionar a tarefa no storage da lista "Done"
    chrome.storage.sync.get(['concluidas'], function (result) {
      const concluidas = result.concluidas || [];
      concluidas.push(tarefa);
      chrome.storage.sync.set({ concluidas: concluidas });
    });
  }

  // Função para adicionar tarefa concluída à lista "Done"
  function adicionarTarefaConcluida(tarefa) {
    const li = document.createElement('li');
    li.textContent = tarefa;
    listaConcluidas.appendChild(li);
  }
});