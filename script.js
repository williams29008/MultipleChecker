const API_KEY = "0M4QB9F25QC6HF3D";

// Hard-coded stocks
const stocks = [
    "AAPL",
    "MSFT",
    "NVDA",
    "TSLA"
    // "VWRL" will probably not work on Alpha Vantage
];

const tbody = document.querySelector("#stockTable tbody");

async function loadStocks() {

    tbody.innerHTML = "";

    for (const symbol of stocks) {

        try {

            // Current quote
            const quoteResponse = await fetch(
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
            );

            const quoteData = await quoteResponse.json();
            const quote = quoteData["Global Quote"];

            if (!quote || Object.keys(quote).length === 0)
                continue;

            // Daily history
            const historyResponse = await fetch(
                `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`
            );

            const historyData = await historyResponse.json();

            const series = historyData["Time Series (Daily)"];

            if (!series)
                continue;

            const dates = Object.keys(series);

            const latestClose = parseFloat(series[dates[0]]["4. close"]);
            const weekClose = parseFloat(series[dates[5]]["4. close"]);

            const weekChange =
                (((latestClose - weekClose) / weekClose) * 100).toFixed(2);

            const price = parseFloat(quote["05. price"]).toFixed(2);
            const dayChange = parseFloat(
                quote["10. change percent"].replace("%", "")
            ).toFixed(2);

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

            // Free Alpha Vantage API limit:
            // 25 requests/day and 5 requests/minute.
            await new Promise(resolve => setTimeout(resolve, 15000));

        } catch (err) {
            console.error(symbol, err);
        }
    }

    document.getElementById("updated").textContent =
        new Date().toLocaleTimeString();
}

loadStocks();

// Refresh every 5 minutes
setInterval(loadStocks, 300000);
