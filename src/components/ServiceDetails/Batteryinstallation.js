import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/services-details1.jpg"
import project2 from "../../images/projects/project2.jpg"
import charts from "../../images/services/charts.jpg"

const BateryInstallation = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                {/* <img src={details1} alt="about" /> */}
              </div>

              <div className="services-details-desc">
                <section id="battery-installation">
                  <h2>Baterijų montavimas</h2>
                  <p>Baterijų montavimas yra svarbus žingsnis norint maksimaliai išnaudoti atsinaujinančią energiją ir užtikrinti energijos nepriklausomybę. Mes siūlome profesionalias baterijų sistemų įrengimo paslaugas, padedančias jums kaupti ir efektyviai naudoti perteklinę saulės energiją.</p>
                  <h3>Mūsų paslaugos apima:</h3>
                  <ul>
                    <li>Baterijų sistemų projektavimą ir parinkimą</li>
                    <li>Profesionalų baterijų montavimą ir prijungimą</li>
                    <li>Integravimą su saulės elektrinėmis ir kitomis energijos šaltinių sistemomis</li>
                    <li>Sistemos efektyvumo stebėjimą ir optimizavimą</li>
                  </ul>
                  <p>Mūsų specialistų komanda užtikrins, kad jūsų baterijų sistema veiktų patikimai, būtų efektyvi ir atitiktų jūsų energijos poreikius.</p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BateryInstallation
