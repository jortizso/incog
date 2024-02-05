let chatVisible = false;

function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatVisible = !chatVisible;
    chatContainer.style.display = chatVisible ? 'flex' : 'none';
}

function openOptionsMenu() {
    const optionsMenu = document.querySelector('.options-menu');
    optionsMenu.style.display = 'flex';
}

function closeOptionsMenu() {
    const optionsMenu = document.querySelector('.options-menu');
    optionsMenu.style.display = 'none';
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBody = document.getElementById('chatBody');

    if (userInput.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.innerText = `Usuario: ${userInput}`;

        chatBody.appendChild(userMessage);

        // Mensaje de respuesta del bot (simulado)
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerText = 'Bot: Gracias por tu mensaje.';

        chatBody.appendChild(botMessage);

        // Limpiar el campo de entrada después de enviar el mensaje.
        document.getElementById('userInput').value = '';

        // Hacer scroll hacia abajo para mostrar los mensajes más recientes.
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    const optionsMenu = document.getElementById('optionsMenu');

    chatVisible = !chatVisible;
    chatContainer.style.display = chatVisible ? 'flex' : 'none';

    // Si el chat se abre, muestra las opciones
    if (chatVisible) {
        optionsMenu.innerHTML = '';  // Limpiar opciones existentes
        showOptions('Sobre los celulares');
        showOptions('Sobre los cursos');
        showOptions('Asesor');
    }
}

function showOptions(option) {
    const optionsMenu = document.getElementById('optionsMenu');
    const optionElement = document.createElement('a');

    optionElement.innerText = option;
    optionElement.href = '#';
    optionElement.onclick = function () {
        sendMessage(`/ ${option}`);
    };

    optionsMenu.appendChild(optionElement);
}