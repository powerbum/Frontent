import React from "react"
import { Link } from "gatsby"

const Pricing = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>Sprendimai</h2>
            <p>
            Štai mūsų sprendimai ir planai: maksimaliai padidinkite pelną ir sumažinkite išlaidas 
            lengvai su mūsų namų baterijų prekybos sprendimu, parduodami sukauptą energiją, 
            kai kainos yra aukščiausios, ir pirkdami, kai jos yra žemiausios.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Mėnesinės išlaidos</h3>
                </div>

                <div className="price">
                  <sup>$</sup> -80 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KW Kaupiklis (Baterija)
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KWH Saules elektrinė
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="/contact" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Pasirinkti planą
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Mėnesinės išlaidos</h3>
                </div>

                <div className="price">
                  <sup>$</sup> -30 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KW Kaupiklis (Baterija)
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KWH Saules elektrinė
                  </li>
                </ul>

                <div className="btn-box"> 
                  <Link to="/contact" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Pasirinkti planą
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Monthly Expenses</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 30 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KW Kaupiklis (Baterija)
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KWH Saules elektrinė
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="/contact" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Pasirinkti planą
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
