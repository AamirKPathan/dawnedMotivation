document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       Load Quote (ZenQuotes API)
       CORS-SAFE + fallback
    ------------------------- */
    async function loadQuote() {
        const quoteBox = document.getElementById("quoteBox");
        quoteBox.innerText = "Loading quote...";

        try {
            const response = await fetch("https://zenquotes.io/api/random");
            const data = await response.json();
            quoteBox.innerText = data[0].q;
        } catch (error) {
            console.error("Quote fetch failed:", error);

            // Local fallback quotes
            const fallbackQuotes = [
                "Believe in yourself.",
                "Keep going.",
                "You are capable of great things.",
                "Small steps every day.",
                "Stay focused and stay positive."
            ];

            quoteBox.innerText = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        }
    }

    loadQuote();
    setInterval(loadQuote, 3600000); // refresh every hour


    /* -------------------------
       Google Search (opens in new tab)
    ------------------------- */
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = document.getElementById("searchInput").value.trim();
        if (query.length === 0) return;

        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.open(url, "_blank");
    });


    /* -------------------------
       Dawned OS Footer Clock
    ------------------------- */
    function updateFooterClock() {
        const clock = document.getElementById("footer-clock");
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        // Leading zeros
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        clock.innerText = `${hours}:${minutes}`;
    }

    setInterval(updateFooterClock, 1000);
    updateFooterClock();

});
