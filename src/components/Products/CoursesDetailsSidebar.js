import React, { useState } from "react"
import { Link } from "gatsby"
import deye from "../../images/products/hibridinis-inverteris-deye-sun.jpg"

// functional component
const CoursesDetailsSidebar = () => {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <div className="courses-details-info">
        <div className="image">
          <img src={deye} alt="course1" />
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-price-tag"></i> Kaina
              </span>
              $49
            </div>
          </li>
        </ul>

        <div className="btn-box">
          <Link to="/contact" className="default-btn">
            <i className="flaticon-price-tag"></i>
            Buy Now <span></span>
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default CoursesDetailsSidebar
