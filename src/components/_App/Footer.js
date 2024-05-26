import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import footerMap from "../../images/footer-map.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p>
              Crafting Tomorrow's Sustainable Vision
              </p>

              {/* <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                {/* <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/team">Our Scientists</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/services">SaaS Solutions</Link>
                </li>
                <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              {/* <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  Zalgirio g 94, <br /> Vilnius, Lithuania
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:37069270029">+370 (692) 70029</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:info@bimbam.com">info@bimbam.com</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>BIMBAM</strong> All rights
                reserved{" "}
              </p>
            </div>

            {/* <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms & Conditions</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
