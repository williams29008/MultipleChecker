

async function getKnots() {
    const valueInput = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    // Empty check
    if (valueInput === "") {
        result.innerHTML = "Please enter a value";
        return;
    }

    // Convert to number
    const valueNumber = Number(valueInput);
    
    if (isNaN(valueNumber)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    
        const Knots = valueNumber * 0.868976;
        const MPH = valueNumber;
        const ms = valueNumber * 0.44704;
		let F = 99;
		switch (MPH) {
			case (MPH < 1):
				F = 0;
				return;
			case (MPH <= 3):
				F = 1;
				return;
			case (MPH <= 7):
				F = 3;
				return;
		}
        
        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
            <p><strong>Beaufort Force ${F}</strong></p>
			
        `;

}

async function getMPH() {
    const valueInput = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    // Empty check
    if (valueInput === "") {
        result.innerHTML = "Please enter a value";
        return;
    }

    // Convert to number
    const valueNumber = Number(valueInput);
    
    if (isNaN(valueNumber)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    
        const Knots = valueNumber;
        const MPH = valueNumber * 1.15078;
        const ms = valueNumber * 0.514;
        
        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
        `;

}

async function getMS() {
    const valueInput = document.getElementById("valueNumber").value;
    const result = document.getElementById("result");

    // Empty check
    if (valueInput === "") {
        result.innerHTML = "Please enter a value";
        return;
    }

    // Convert to number
    const valueNumber = Number(valueInput);
    
    if (isNaN(valueNumber)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
								const MPH = valueNumber * 2.23694;
        const ms = valueNumber;
        const Knots = valueNumber * 1.94384;

        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
        `;

}
