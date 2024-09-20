import React from "react"
import { Link } from "gatsby"
import shape from "../../images/shape/vector-shape6.png"
import deye from "../../images/products/hibridinis-inverteris-deye-sun.jpg"


const ProductsContent = () => {
  return (
    <>
      <div className="courses-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link to="/products/deye-sun-12k" className="d-block image">
                    <img src={deye} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">€2399</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link to="/products/deye-sun-12k">
                    Hibridinis inverteris Deye SUN-12K-SG04LP3-EU
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="vector-shape6">
          <img src={shape} alt="about" />
        </div>
      </div>
    </>
  )
}

export default ProductsContent
