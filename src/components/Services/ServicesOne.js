import React from "react"
import { Link } from "gatsby"
import solar from "../../images/shape/solar-panel-in-sunlight-svgrepo-com.svg"
import batery from "../../images/shape/battery-full-ui-svgrepo-com.svg"

const ServicesOne = () => {
  return (
    <>
      <section className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <Link to="/services/solarinstallation" className="link-container">
                    <img src={solar} alt="solar" className="solar-image" />
                  </Link>
                </div>
                <h3>
                  <Link to="/services/solarinstallation">Saulės elektrinių montavimas</Link>
                </h3>
                <p>
                  Profesionalus saulės energijos sprendimas, užtikrinantis efektyvų energijos naudojimą ir tausojančią aplinką.
                </p>

                <Link className="view-details-btn" to="/services/solarinstallation">
                  Plačiau
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                <Link to="/services/batteryinstallation" className="link-container">
                    <img src={batery} alt="batery" className="solar-image" />
                  </Link>
                </div>

                <h3>
                  <Link to="/services/batteryinstallation">Baterijų montavimas</Link>
                </h3>

                <p>
                  Profesionalus energijos kaupimas ir nepriklausomybė. Užtikriname patikimą sistemos veikimą.
                </p>

                <Link className="view-details-btn" to="/services/batteryinstallation">
                  Plačiau
                </Link>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">eCommerce Platforms</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesOne
