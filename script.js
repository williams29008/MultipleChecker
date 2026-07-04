

async function getKnots() {
    const valueNumber = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    if (!valueNumber) {
        result.innerHTML = "Please enter a value";
        return;
    }
        result.innerHTML = `
            <h2>Result in MPH</h2>
            <p><strong>Price:</p>
            <p><strong>Change:</p>
            <p><strong>Change %:</p>
        `;

}
