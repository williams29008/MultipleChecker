

async function getStockPrice() {
    const symbol = document.getElementById("symbol").value.trim().toUpperCase();
    const result = document.getElementById("result");

    if (!symbol) {
        result.innerHTML = "Please enter a stock symbol.";
        return;
    }

    result.innerHTML = "Loading...";

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const quote = data["Global Quote"];

        if (!quote || Object.keys(quote).length === 0) {
            result.innerHTML = "Stock not found.";
            return;
        }

        result.innerHTML = `
            <h2>${quote["01. symbol"]}</h2>
            <p><strong>Price:</strong> $${quote["05. price"]}</p>
            <p><strong>Change:</strong> ${quote["09. change"]}</p>
            <p><strong>Change %:</strong> ${quote["10. change percent"]}</p>
            <p><strong>Latest Trading Day:</strong> ${quote["07. latest trading day"]}</p>
        `;
    } catch (error) {
        result.innerHTML = "Error retrieving stock data.";
        console.error(error);
    }
}
