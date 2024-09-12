import React, { useState } from 'react';
import { Link } from "gatsby";

const Calculator = () => {
    const [monthlyCost, setMonthlyCost] = useState(100);  // Vidutinės mėnesinės elektros sąnaudos EUR
    const [electricityPrice, setElectricityPrice] = useState(0.25);  // Elektros kaina už kWh EUR
    const [includeBattery, setIncludeBattery] = useState(true);  // Baterijos sistema iš anksto įjungta

    const averageDailyUsage = (monthlyCost / electricityPrice) / 30;  // Vidutinė kWh sunaudojimo per dieną
    const dailySolarProduction = 4;  // kWh gaminami per saulės panelę per dieną (priklauso nuo vietos)
    const solarPanelCost = 500;  // Kaina už vieną saulės panelę
    const batteryStorageCost = 2000;  // Baterijos saugojimo kaina (už 10 kWh)

    // Apskaičiuoja reikalingą saulės panelių skaičių
    const numberOfPanels = Math.ceil(averageDailyUsage / dailySolarProduction);

    // Saulės panelių generuojama elektros energija
    const electricityGenerated = numberOfPanels * dailySolarProduction * 365;  // kWh per metus

    // Baterijos saugojimo talpa
    const batteryStorage = includeBattery ? Math.ceil(averageDailyUsage * 2) : 0;

    // Bendros sistemos kainos apskaičiavimas
    const totalCost = numberOfPanels * solarPanelCost + (includeBattery ? batteryStorageCost : 0);

    // Kaina po 35% nuolaidos
    const discountedCost = totalCost * 0.65;

    // Atsipirkimo laikotarpis metais
    const annualSavings = monthlyCost * 12;
    const paybackPeriod = (discountedCost / annualSavings).toFixed(1);

    return (
        <div className="solar-calculator">
            <h2>Saulės Panelių ir Baterijos Skaičiuoklė</h2>
            <div className="slider-container">
                <label>Mėnesinės elektros sąnaudos (EUR): {monthlyCost}€</label>
                <input
                    type="range"
                    min="50"
                    max="500"
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(e.target.value)}
                />

                <label>Elektros kaina (EUR/kWh): {electricityPrice}€/kWh</label>
                <input
                    type="range"
                    min="0.10"
                    max="0.50"
                    step="0.01"
                    value={electricityPrice}
                    onChange={(e) => setElectricityPrice(e.target.value)}
                />
            </div>

            <div className="checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={includeBattery}
                        onChange={() => setIncludeBattery(!includeBattery)}
                    />
                    Įtraukti baterijos saugojimą
                </label>
            </div>

            <div className="results-container">
                <h3>Rezultatai</h3>
                <p>Rekomenduojamas saulės panelių skaičius: {numberOfPanels}</p>
                {includeBattery && <p>Baterijos saugojimo talpa: {batteryStorage} kWh</p>}
                <p>Saulės panelių generuojama elektros energija per metus: {electricityGenerated} kWh</p>
                <p>Bendros sistemos kaina: {totalCost}€</p>
                <p>Kaina po APVA paramos: {discountedCost.toFixed(2)}€</p>
                <p>Atsipirkimo laikotarpis: {paybackPeriod} metai</p>
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
