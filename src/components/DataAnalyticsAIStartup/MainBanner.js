import React, { useState } from "react";
import AOS from "aos";
import FsLightbox from "fslightbox-react";
import { Link } from "gatsby";

import banner14 from "../../images/banner14.png";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <FsLightbox toggler={toggler} />

      <div className="banner-wrapper overflow-hidden">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  AI Powered Home Energy Solutions
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Transform your home's energy landscape with our Home Battery Trading Solution.
                  Maximize your profits by selling stored energy when prices are highest and buying
                  when they are lowest. Enjoy cost savings and reduce your environmental impact effortlessly.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    About Us <span></span>
                  </Link>
                  <Link to="/profile-authentication" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <img
                src={banner14}
                alt="banner"
                className="animate__animated animate__fadeInDown animate__delay-1s"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
