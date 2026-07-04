const API_KEY = "E0L19N09AUCR4FOO";

// Hard-coded stocks
const stocks = [
    "TSLA"
];

const tbody = document.querySelector("#stockTable tbody");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isRateLimited(data) {
    return data?.Note || data?.Information;
}

async function fetchJSON(url) {
    const res = await fetch(url);
    return await res.json();
}

async function loadStocks() {
    tbody.innerHTML = "";

    for (const symbol of stocks) {
        try {
            // ---- Fetch quote ----
            const quoteData = await fetchJSON(
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
            );

            if (isRateLimited(quoteData)) {
                console.warn("Rate limit hit (quote):", quoteData);
                break;
            }

            const quote = quoteData["Global Quote"];
            if (!quote || Object.keys(quote).length === 0) {
                console.warn("Invalid quote for", symbol);
                continue;
            }

            // ---- Fetch history ----
            const historyData = await fetchJSON(
                `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`
            );

            if (isRateLimited(historyData)) {
                console.warn("Rate limit hit (history):", historyData);
                break;
            }

            const series = historyData["Time Series (Daily)"];
            if (!series) {
                console.warn("No time series for", symbol);
                continue;
            }

            // ---- Safely sort dates ----
            const dates = Object.keys(series).sort(
                (a, b) => new Date(b) - new Date(a)
            );

            if (dates.length === 0) continue;

            const latestClose = parseFloat(series[dates[0]]["4. close"]);

            const weekIndex = Math.min(5, dates.length - 1);
            const weekClose = parseFloat(series[dates[weekIndex]]["4. close"]);

            const weekChange =
                weekClose
                    ? (((latestClose - weekClose) / weekClose) * 100).toFixed(2)
                    : "0.00";

            // ---- Quote values ----
            const price = parseFloat(quote["05. price"] || 0).toFixed(2);

            const dayChangeRaw = quote["10. change percent"] || "0%";
            const dayChange = parseFloat(dayChangeRaw.replace("%", "")).toFixed(2);

            // ---- Create row ----
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${symbol}</td>
                <td>$${price}</td>

                <td class="${dayChange >= 0 ? "up" : "down"}">
                    ${dayChange}%
                </td>

                <td class="${weekChange >= 0 ? "up" : "down"}">
                    ${weekChange}%
                </td>
            `;

            tbody.appendChild(row);

            // ---- Respect API limits (5/min free tier) ----
            await sleep(15000);

        } catch (err) {
            console.error("Error with", symbol, err);
        }
    }

    document.getElementById("updated").textContent =
        new Date().toLocaleTimeString();
}

// Initial load
loadStocks();

// Refresh every 5 minutes
setInterval(loadStocks, 300000);
