import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"
import icon4 from "../../images/services/service-icon4.png"
import icon5 from "../../images/services/service-icon5.png"
import icon6 from "../../images/services/service-icon6.png"
import shape1 from "../../images/services/service-shape1.png"
import shape2 from "../../images/services/service-shape2.png"
import ServicesOne from "../Services/ServicesOne"

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100 bg-e3fbff">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="Icon" />
              Paslaugos
            </span>
            <h2>Mūsų Paslaugos</h2>
          </div>

          <ServicesOne></ServicesOne>

          {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon1} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/algotrading">Algorithm-Driven Energy Trading</Link>
                </h3>
                <p>
                Maximize Your Energy Profits with Intelligent Trading
                </p>

                <Link to="/services/algotrading" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon2} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/batteryinstallation">Professional Battery Installation</Link>
                </h3>
                <p>
                Enhance Your Home's Energy Storage with Expert Battery Installation
                </p>

                <Link to="/services/batteryinstallation" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon3} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/solarinstallation">Solar Panel Installation</Link>
                </h3>
                <p>
                Harness the Power of the Sun with Our Solar Panel Installation Service
                </p>

                <Link to="/services/solarinstallation" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon4} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Real Time Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  doloresssit amet aliqua.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon5} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Big Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  doloresssit amet aliqua.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Business Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  doloresssit amet aliqua.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div> 

            <div className="col-lg-12 col-md-12">
              <div className="load-more-btn text-center">
                <Link to="/services" className="default-btn">
                  <i className="flaticon-refresh"></i>
                  Load More <span></span>
                </Link>
              </div>
            </div> 
          </div> */}


        </div>
      </section>
    </>
  )
}

export default OurServices
