

async function getKnots() {
    const valueNumber = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    if (!valueNumber) {
        result.innerHTML = "Please enter a value";
        return;
    }
        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: </p>
            <p><strong>Knots:</p>
            <p><strong>Force:</p>
        `;

}
