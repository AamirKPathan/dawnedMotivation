document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       Load Quote (TypeFit API)
    ------------------------- */
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


    /* -------------------------
       Google Search (New Tab)
    ------------------------- */
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = document.getElementById("searchInput").value.trim();
        if (query.length === 0) return;

        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.open(url, "_blank");
    });


    /* -------------------------
       Dawned OS Clock
    ------------------------- */
    function updateFooterClock() {
        const clock = document.getElementById("footer-clock");
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        clock.innerText = `${hours}:${minutes}`;
    }

    setInterval(updateFooterClock, 1000);
    updateFooterClock();

});
