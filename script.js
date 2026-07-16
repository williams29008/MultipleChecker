

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
        const ms = valueNumber * 0.44704
        let F = 99;
		switch (true) {
			case (MPH < 1):
				F = 0;
				break;
			case (MPH <= 3):
				F = 1;
				break;
			case (MPH <= 7):
				F = 2;
				break;
			case (MPH <= 12):
				F = 3;
				break;
			case (MPH <= 18):
				F = 4;
				break;
			case (MPH <= 24):
				F = 5;
				break;
			case (MPH <= 31):
				F = 6;
				break;
			case (MPH <= 38):
				F = 7;
				break;
			case (MPH <= 46):
				F = 8;
				break;
			case (MPH <= 54):
				F = 9;
				break;
			case (MPH <= 63):
				F = 10;
				break;
			case (MPH < 73):
				F = 11;
				break;
			case (MPH >= 73):
				F = 12;
				break;
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
        let F = 99;
		switch (true) {
			case (MPH < 1):
				F = 0;
				break;
			case (MPH <= 3):
				F = 1;
				break;
			case (MPH <= 7):
				F = 2;
				break;
			case (MPH <= 12):
				F = 3;
				break;
			case (MPH <= 18):
				F = 4;
				break;
			case (MPH <= 24):
				F = 5;
				break;
			case (MPH <= 31):
				F = 6;
				break;
			case (MPH <= 38):
				F = 7;
				break;
			case (MPH <= 46):
				F = 8;
				break;
			case (MPH <= 54):
				F = 9;
				break;
			case (MPH <= 63):
				F = 10;
				break;
			case (MPH < 73):
				F = 11;
				break;
			case (MPH >= 73):
				F = 12;
				break;
		}

        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
			<p><strong>Beaufort Force ${F}</strong></p>
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
		let F = 99;
		switch (true) {
			case (MPH < 1):
				F = 0;
				break;
			case (MPH <= 3):
				F = 1;
				break;
			case (MPH <= 7):
				F = 2;
				break;
			case (MPH <= 12):
				F = 3;
				break;
			case (MPH <= 18):
				F = 4;
				break;
			case (MPH <= 24):
				F = 5;
				break;
			case (MPH <= 31):
				F = 6;
				break;
			case (MPH <= 38):
				F = 7;
				break;
			case (MPH <= 46):
				F = 8;
				break;
			case (MPH <= 54):
				F = 9;
				break;
			case (MPH <= 63):
				F = 10;
				break;
			case (MPH < 73):
				F = 11;
				break;
			case (MPH >= 73):
				F = 12;
				break;
		}


        result.innerHTML = `
            <h2>Results</h2>
            <p><strong>MPH: ${MPH.toFixed(1)}</strong></p>
            <p><strong>Knots: ${Knots.toFixed(1)}</strong></p>
            <p><strong>M/S: ${ms.toFixed(1)}</strong></p>
			<p><strong>Beaufort Force ${F}</strong></p>
        `;

}
