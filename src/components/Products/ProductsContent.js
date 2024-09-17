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

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-courses-box ">
                <div className="courses-image">
                  <Link to="/courses/course-details" className="d-block image">
                    <img src={course2} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img src={user2} className="rounded-circle" alt="about" />
                    <span>Sarah Taylor</span>
                  </div>
                  <h3>
                    <Link to="/courses/course-details">
                      Introduction to Linear Models and Matrix Algebra
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 7 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link to="/courses/course-details" className="d-block image">
                    <img src={course3} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">$69</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img src={user3} className="rounded-circle" alt="about" />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link to="/courses/course-details">
                      Data Science: Inference and Modeling
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 2 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link to="/courses/course-details" className="d-block image">
                    <img src={course4} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img src={user4} className="rounded-circle" alt="about" />
                    <span>Alex Morgan</span>
                  </div>
                  <h3>
                    <Link to="/courses/course-details">
                      The Data Science Course: Complete Data Science
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 3 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link to="/courses/course-details" className="d-block image">
                    <img src={course5} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">$65</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img src={user5} className="rounded-circle" alt="about" />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link to="/courses/course-details">
                      Java Programming Masterclass for Developers
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 3 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link to="/courses/course-details" className="d-block image">
                    <img src={course6} alt="about" />
                  </Link>
                  <Link to="#" className="fav">
                    <i className="flaticon-heart"></i>
                  </Link>
                  <div className="price shadow">$69</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img src={user6} className="rounded-circle" alt="about" />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link to="/courses/course-details">
                      Machine Learning A-Z™: Hands-On Python
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 2 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}




            {/* Pagination */}
            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <Link to="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </Link>
                <span className="page-numbers current">1</span>
                <Link to="#" className="page-numbers">
                  2
                </Link>
                <Link to="#" className="page-numbers">
                  3
                </Link>
                <Link to="#" className="page-numbers">
                  4
                </Link>
                <Link to="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div> */}
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
