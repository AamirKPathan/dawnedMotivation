// Load a random motivational quote
function loadQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            document.getElementById("quoteBox").innerText = data.content;
        })
        .catch(() => {
            document.getElementById("quoteBox").innerText = "Could not load quote.";
        });
}

// Load immediately
loadQuote();

// Refresh every hour
setInterval(loadQuote, 3600000);

// Google Search Bar Logic
document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("searchInput").value.trim();
    if (query.length === 0) return;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);

    document.getElementById("browserFrame").src = url;
});