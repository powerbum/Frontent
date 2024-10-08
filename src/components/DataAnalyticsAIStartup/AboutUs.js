import React from "react"
import { Link } from "gatsby"
import img10 from "../../images/about/about-img12.png"
import shape1 from "../../images/about/about-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import starIcon from "../../images/star-icon.png"

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={img10} alt="banner" />
                <div className="shape">
                  <img src={shape1} alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  {/* <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    AI Algoritmas
                  </span> */}
                  <h2>AI Algoritmas valdantis energijos suvartojimą</h2>
                  <p>
                  Algoritmas optimizuoja namų baterijų naudojimą pagal elektros kainų prognozes, vartotojo suvartojimo įpročius ir orų sąlygas (jei yra saulės panelės). Jis krauna bateriją, kai elektra pigiausia, ir naudoja arba parduoda sukauptą energiją pagal vartotojo poreikius.
                  </p>
                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Mažesnės išlaidos
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Nepriklausomybė
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Saulės energijos integracija
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Darnesnis energijos vartojimas
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Priderinimas prie vartotojo įpročių
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Visiška automatizacija
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p> */}
                  <Link to="/algo" className="default-btn">
                    {/* <i className="flaticon-right"></i> */}
                    Sužinoti daugiau <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
