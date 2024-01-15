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
                  <h2>Crafting Tomorrow's Sustainable Vision</h2>
                  <p>
                  We are dedicated to shaping a sustainable tomorrow by pioneering innovative solutions for green living. Our commitment is reflected in:
                  </p>
                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Cutting-Edge Technology
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Customer-Centric Approach
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Environmental Stewardship
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Continuous Innovation
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
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
