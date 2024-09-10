import React from "react"
import { Link } from "gatsby"
import img10 from "../../images/about/about-img10.png"
import shape1 from "../../images/about/about-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import starIcon from "../../images/star-icon.png"

const AboutUsContent = () => {
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
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    Apie Mus
                  </span>
                  <h2>Sveiki atvykę į mūsų inovatyvų energijos valdymo pasaulį!</h2>
                  <p>
                  „SmartCharge“ mes esame pasiryžę pakeisti jūsų sąveiką su energija 
                  namuose. Mūsų namų baterijų prekybos sprendimas sukurtas tam, kad 
                  suteiktų tokiems namų savininkams kaip jūs galimybę kontroliuoti 
                  savo energijos vartojimą, optimizuoti išlaidas ir prisidėti prie 
                  žalesnės planetos. Mūsų įsipareigojimas atsispindi:
                  </p>

                  {/* <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Smart Energy Trading
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cost Savings
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Environmental Impact
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User-Centric Design
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul> */}

                  <h3>Mūsų misija</h3>
                  <p>Mūsų misija yra revoliucionizuoti namų energijos valdymą, siūlant išmanų, 
                    patogų sprendimą, kuris maksimaliai padidins jūsų finansinius ir aplinkosaugos 
                    privalumus. Tikime ateitimi, kurioje energija yra valdoma efektyviai, tvariai 
                    ir ekonomiškai, ir mūsų pažangia technologija yra čia, kad šią ateitį paverstų 
                    realybe.</p>
                  {/* <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsContent
