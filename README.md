# Gerenciador de Tarefas Simplificado

## Descrição
Esta é uma extensão simples do Google Chrome para gerenciar suas tarefas diárias. Com ela, você pode adicionar tarefas, marcá-las como concluídas e gerenciar o que precisa ser feito diretamente no navegador.

## Funcionalidades
- Adicionar tarefas à lista **To Do**.
- Marcar tarefas como concluídas e movê-las para a lista **Done**.
- Persistência de dados, garantindo que as tarefas sejam salvas mesmo após o fechamento do navegador.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da interface da extensão.
- **CSS3**: Estilização visual (fundo preto, letras brancas, bordas arredondadas).
- **JavaScript**: Lógica para adicionar, concluir tarefas e armazenamento persistente.
- **API do Chrome (`chrome.storage.sync`)**: Armazenamento local para salvar e restaurar as tarefas.

## Instalação
1. Baixe ou clone o repositório.
   ```bash
   git clone <URL_DO_REPOSITÓRIO_GITHUB>
2. No Google Chrome, acesse chrome://extensions/.
3.	Ative o Modo Desenvolvedor.
4.	Clique em Carregar sem compactação e selecione a pasta do projeto.

## Uso
1.	Abra a extensão clicando no ícone na barra de ferramentas do Chrome.
2.	Adicione uma tarefa na lista To Do digitando no campo de texto e clicando em Adicionar ou pressionando Enter.
3.	Marque tarefas como concluídas clicando no botão Concluir ao lado da tarefa.
4.	As tarefas concluídas serão movidas para a lista Done e permanecerão salvas.