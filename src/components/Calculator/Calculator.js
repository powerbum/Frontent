import React, { useState } from 'react';
import { Link } from "gatsby";

const Calculator = () => {
    const [monthlyCost, setMonthlyCost] = useState(50);  // Vidutinės mėnesinės elektros sąnaudos EUR
    const [electricityPrice, setElectricityPrice] = useState(0.22);  // Elektros kaina už kWh EUR

    const dailySolarProduction = 3;  // kWh gaminami per saulės panelę per dieną (priklauso nuo vietos)

    const averageMonthlyUsage = Math.ceil(monthlyCost / electricityPrice);
    // Apskaičiuoja reikalingą saulės panelių skaičių
    const numberOfPanels = Math.ceil(averageMonthlyUsage / (dailySolarProduction * 31));

    var costPerKwBefore = 550;
    var costPerAfterApva = 230;
    const costBeforeApva = Math.ceil(numberOfPanels*costPerKwBefore);
    const costAfterApva = Math.ceil(numberOfPanels*costPerAfterApva);


    return (
        <div className="solar-calculator">
            <h2>Saulės Panelių Skaičiuoklė</h2>
            <div className="slider-container">
                <label>Mėnesinės elektros sąnaudos (EUR): {monthlyCost}€</label>
                <input
                    type="range"
                    min="0"
                    max="500"
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(e.target.value)}
                />

                <label>Elektros kaina (EUR/kWh): {electricityPrice}€/kWh</label>
                <input
                    type="range"
                    min="0"
                    max="0.50"
                    step="0.01"
                    value={electricityPrice}
                    onChange={(e) => setElectricityPrice(e.target.value)}
                />
            </div>

            <div className="results-container">
                <h3>Rezultatai</h3>
                <p>Suvartota per mėnesį: {averageMonthlyUsage} kWh</p>
                <p>Rekomenduojama saulės elektrinė: {numberOfPanels} kW</p>
                <p>Kaina: {costBeforeApva} €</p>
                <p>Kaina po APVA paramos: {costAfterApva} €</p>
            </div>
            <div className="others-option d-flex align-items-center">

            </div>

            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="btn-box" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/contact" className="default-btn">
                            GAUTI PASIŪLYMĄ<span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
