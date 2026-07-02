async function loadQuote() {
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.innerText = "Loading quote...";

    try {
        const response = await fetch("https://api.quotable.io/random", {
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();
        quoteBox.innerText = data.content;
    } catch (error) {
        console.error("Quote fetch failed:", error);
        quoteBox.innerText = "Stay positive and keep learning!";
    }
}

// Load immediately
loadQuote();

// Refresh every hour
setInterval(loadQuote, 3600000);

// Google Search Logic
document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query.length === 0) return;
    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    document.getElementById("browserFrame").src = url;
});
