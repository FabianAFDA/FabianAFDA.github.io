function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${name}! Welcome to my website!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
}
