const coalEmissionFactors = {
    anthracite: 2.86,
    bituminous: 2.45,
    subBituminous: 2.15,
    lignite: 1.97,
};

function calculate() {
    const coalType = document.getElementById("coalType").value;
    const coalAmount = parseFloat(document.getElementById("coalAmount").value);
    const efficiencyFactor = parseFloat(document.getElementById("efficiencyFactor").value);

    if (!coalEmissionFactors[coalType] || isNaN(coalAmount) || isNaN(efficiencyFactor)) {
        document.getElementById("result").innerText = "Please provide valid inputs.";
        return;
    }

    const emissions = coalAmount * coalEmissionFactors[coalType] * efficiencyFactor;
    document.getElementById("result").innerText = `Total Emissions: ${emissions.toFixed(2)} tons of CO2`;
}