function submitQuote() {
    const quoteInput = document.getElementById('quoteInput').value;
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `Veteran's Quote: "${quoteInput}`;
}
