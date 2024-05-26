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
                    About Us
                  </span>
                  <h2>Welcome to our innovative world of energy management!</h2>
                  <p>
                  At SmartChargeAI, we are dedicated to transforming the way you interact with energy in your home. 
                  Our Home Battery Trading Solution is designed to empower homeowners like you to take control of your energy usage, 
                  optimize your costs, and contribute to a greener planet. Our commitment is reflected in:
                  </p>

                  <ul className="about-list">
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
                  </ul>

                  <h3>Our Mission</h3>
                  <p>Our mission is to revolutionize home energy management by providing a smart, 
                    user-friendly solution that maximizes your financial and environmental benefits. 
                    We believe in a future where energy is managed efficiently, sustainably, and economically, 
                    and our cutting-edge technology is here to make that future a reality.</p>
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
