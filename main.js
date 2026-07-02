function loadQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(data => {
            document.getElementById("quoteBox").innerText = data.content;
        })
        .catch(() => {
            document.getElementById("quoteBox").innerText = "Stay positive and keep learning!";
        });
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