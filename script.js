const API_KEY = "0M4QB9F25QC6HF3D";

// Edit this list
const stocks = [
    "AAPL",
    "MSFT",
    "ARCC",
    "VWRL.L",
    "VUSA.L",
    "VHYL.L"
];

const tbody = document.querySelector("#stockTable tbody");

async function loadStocks(){

    tbody.innerHTML = "";

    for(const symbol of stocks){

        try{

            // Current quote
            const quoteResponse = await fetch(
                `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`
            );

            const quote = await quoteResponse.json();

            // Last 6 daily closes
            const historyResponse = await fetch(
                `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=6&apikey=${API_KEY}`
            );

            const history = await historyResponse.json();

            if(!history.values){
                continue;
            }

            const today = parseFloat(history.values[0].close);
            const yesterday = parseFloat(history.values[1].close);
            const weekAgo = parseFloat(history.values[5].close);

            const dayChange =
                ((today-yesterday)/yesterday*100).toFixed(2);

            const weekChange =
                ((today-weekAgo)/weekAgo*100).toFixed(2);

            const row=document.createElement("tr");

            row.innerHTML=`
                <td>${symbol}</td>
                <td>${parseFloat(quote.close).toFixed(2)}</td>
                <td class="${dayChange>=0?'up':'down'}">
                    ${dayChange}%
                </td>
                <td class="${weekChange>=0?'up':'down'}">
                    ${weekChange}%
                </td>
            `;

            tbody.appendChild(row);

        }
        catch(e){
            console.log(e);
        }

    }

    document.getElementById("updated").innerHTML =
        new Date().toLocaleTimeString();
}

loadStocks();

// Refresh every minute
setInterval(loadStocks,60000);
