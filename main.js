document.addEventListener("DOMContentLoaded", () => {

    async function loadQuote() {
        const quoteBox = document.getElementById("quoteBox");
        quoteBox.innerText = "Loading quote...";

        try {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            const randomQuote = data[Math.floor(Math.random() * data.length)];
            quoteBox.innerText = randomQuote.text;
        } catch (error) {
            console.error("Quote fetch failed:", error);
            quoteBox.innerText = "Stay positive and keep learning!";
        }
    }

    loadQuote();
    setInterval(loadQuote, 3600000);

    // Google Search Logic
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = document.getElementById("searchInput").value.trim();
        if (query.length === 0) return;
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        document.getElementById("browserFrame").src = url;
    });

});
