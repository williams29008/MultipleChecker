

async function getKnots() {
    const valueNumber = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    if (!valueNumber) {
        result.innerHTML = "Please enter a value";
        return;
    }
    
    if (isNaN(valueNumber)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    
        const Knots = valueNumber * 0.868976;
        const MPH = valueNumber;
        const ms = valueNumber * 0.44704;
        
        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
        `;

}
