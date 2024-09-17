import React, { Component } from "react"
import { Link } from "gatsby"
import CoursesDetailsSidebar from "./CoursesDetailsSidebar"
import details from "../../images/courses/courses-details.jpg"
import speaker1 from "../../images/speaker/speaker1.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import user4 from "../../images/user4.jpg"

class ProductDetailsContent extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp")
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    document.getElementById(tabNmae).className += " fadeInUp animated"
    evt.currentTarget.className += "current"
  }

  render() {
    return (
      <>
        <div className="courses-details-area pb-100">
          {/* <div className="courses-details-image">
            <img src={details} alt="course" />
          </div> */}

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="courses-details-desc">
                  <ul className="nav nav-tabs">
                    <li
                      className="current"
                      onClick={e => this.openTabSection(e, "tab1")}
                      aria-hidden="true"
                    >
                      Prekės aprašymas
                    </li>
                    {/* <li
                      onClick={e => this.openTabSection(e, "tab2")}
                      aria-hidden="true"
                    >
                      Curriculum
                    </li> */}
                  </ul>

                  <div className="tab-content">
                    <div id="tab1" className="tab-pane tabs_item">
                      <div className="courses-overview">
                        <h3>Course Description</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.
                        </p>
                        <h3>Certification</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.
                        </p>
                        <h3>Who this course is for</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.
                        </p>
                      </div>
                    </div>

                    {/* <div id="tab2" className="tab-pane tabs_item">
                      <div className="courses-curriculum">
                        <h3>Python Introduction</h3>
                        <ul>
                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                Python Introduction
                              </span>
                              <div className="courses-meta">
                                <span className="questions">5 questions</span>
                                <span className="duration">01 Hour</span>
                                <span className="status">Preview</span>
                              </div>
                            </Link>
                          </li>
                        </ul>

                        <h3>Stepping into the World of Python</h3>
                        <ul>
                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                NumPy Introduction
                              </span>
                              <div className="courses-meta">
                                <span className="duration">15 Min</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                NumPy Getting Started
                              </span>
                              <div className="courses-meta">
                                <span className="duration">30 Min</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                NumPy Creating Arrays
                              </span>
                              <div className="courses-meta">
                                <span className="duration">45 Min</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                NumPy Array Indexing
                              </span>
                              <div className="courses-meta">
                                <span className="questions">4 questions</span>
                                <span className="duration">1 Hour</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                NumPy Array Slicing
                              </span>
                              <div className="courses-meta">
                                <span className="duration">1.5 Hour</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>
                        </ul>

                        <h3>Python MySQL</h3>
                        <ul>
                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">Python MySQL</span>
                              <div className="courses-meta">
                                <span className="duration">01 Hour</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                Python MySQL Create Database
                              </span>
                              <div className="courses-meta">
                                <span className="questions">3 questions</span>
                                <span className="duration">1.1 Hour</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="#"
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">
                                Python MySQL Create Table
                              </span>
                              <div className="courses-meta">
                                <span className="duration">1.5 Hour</span>
                                <span className="status locked">
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <CoursesDetailsSidebar />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductDetailsContent
