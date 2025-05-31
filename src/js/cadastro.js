// Trabalho Interdisciplinar 1 - Aplicações Web
// CRUD para Jogos de Tabuleiro usando JSONServer
// Adapte a URL para o endpoint /jogos na sua API JSONServer!
const apiUrl = 'https://206f06c1-1d9d-4805-869f-1aee322c1c18-00-3oteliflx6o43.riker.replit.dev/jogos';
// Exemplo: const apiUrl = 'https://jsonserver.rommelpuc.repl.co/jogos';

function displayMessage(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readJogo(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler jogos via API JSONServer:', error);
            displayMessage("Erro ao ler jogos");
        });
}

function createJogo(jogo, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jogo),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Jogo inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir jogo via API JSONServer:', error);
            displayMessage("Erro ao inserir jogo");
        });
}

function updateJogo(id, jogo, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jogo),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Jogo alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar jogo via API JSONServer:', error);
            displayMessage("Erro ao atualizar jogo");
        });
}

function deleteJogo(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Jogo removido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover jogo via API JSONServer:', error);
            displayMessage("Erro ao remover jogo");
        });
}
