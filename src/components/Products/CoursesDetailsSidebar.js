import React, { useState } from "react";
import { Link } from "gatsby";

// functional component
const CoursesDetailsSidebar = ({ price, image }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="courses-details-info">
        <div className="image">
          {/* Render image from props */}
          <img src={image} alt="product" />
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-price-tag"></i> Kaina
              </span>
              {/* Render price from props */}
              €{price}
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
  );
};

export default CoursesDetailsSidebar;
