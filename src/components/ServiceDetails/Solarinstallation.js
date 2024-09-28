import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/services-details1.jpg"
import project2 from "../../images/projects/project2.jpg"
import charts from "../../images/services/charts.jpg"

const SolarInstallation = () => {
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
                <section id="solar-installation">
                  <h2>Saulės elektrinių montavimas</h2>
                  <p>Saulės elektrinių montavimas yra puikus būdas sumažinti elektros sąnaudas ir prisidėti prie švaresnės aplinkos. Mes siūlome visapusiškas saulės elektrinių įrengimo paslaugas, pradedant nuo konsultacijos ir projektavimo iki galutinio montavimo ir sistemos paleidimo.</p>
                  <h3>Mūsų paslaugos apima:</h3>
                  <ul>
                    <li>Individualiai pritaikytą saulės elektrinių projektavimą</li>
                    <li>Profesionalų saulės modulių montavimą</li>
                    <li>Inverterių ir kitų reikalingų komponentų įrengimą</li>
                    <li>Sistemos testavimą ir prijungimą prie elektros tinklo</li>
                    <li>Pagalbą gauti leidimus ir subsidijas</li>
                  </ul>
                  <p>Mūsų ekspertų komanda užtikrins kokybišką saulės elektrinės montavimą, atitinkantį visus saugumo ir efektyvumo reikalavimus, kad galėtumėte pradėti naudotis švaria ir atsinaujinančia energija.</p>
                </section>

              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SolarInstallation
