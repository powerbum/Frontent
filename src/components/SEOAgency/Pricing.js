import React from "react"
import { Link } from "gatsby"

const Pricing = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>Solutions</h2>
            <p>
            Here are our solutions and plans: maximize profits and 
            reduce costs effortlessly with our Home Battery Trading 
            Solution by selling stored energy when prices are highest and buying when they are lowest
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Monthly Expenses</h3>
                </div>

                <div className="price">
                  <sup>$</sup> -80 <sub></sub>
                </div>
                
                <div className="pricing-header">
                  <h3>Cost After</h3>
                </div>

                <div className="price">
                  <sup>$</sup> -80 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KW Batery
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KWH Solar panels
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
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
                  <sup>$</sup> -80 <sub></sub>
                </div>
                
                <div className="pricing-header">
                  <h3>Cost After</h3>
                </div>

                <div className="price">
                  <sup>$</sup> -30 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KW Batery
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 10KWH Solar panels
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
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
                  <sup>$</sup> 80 <sub></sub>
                </div>
                
                <div className="pricing-header">
                  <h3>Cost After</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 30 <sub></sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KW Batery
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> 10KWH Solar panels
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
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
