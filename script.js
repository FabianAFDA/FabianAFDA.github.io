function greetUser() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = `Hello, ${nameInput}! Welcome to our site.`;
}
