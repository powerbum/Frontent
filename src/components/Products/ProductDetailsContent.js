import React, { Component } from "react";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";

class ProductDetailsContent extends Component {
  // Tab
  openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  render() {
    const { price, image, description, techdetails } = this.props.productDetails; // Dynamically receive props

    return (
      <div className="courses-details-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="courses-details-desc">
                <ul className="nav nav-tabs">
                  <li
                    className="current"
                    onClick={(e) => this.openTabSection(e, "tab1")}
                    aria-hidden="true"
                  >
                    Prekės aprašymas
                  </li>
                  <li
                    onClick={(e) => this.openTabSection(e, "tab2")}
                    aria-hidden="true"
                  >
                    Techniniai Duomenys
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab1" className="tab-pane tabs_item">
                    <div className="courses-overview">
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                  </div>
                  <div id="tab2" className="tab-pane tabs_item">
                    <div className="courses-overview" >
                      <div dangerouslySetInnerHTML={{ __html: techdetails }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CoursesDetailsSidebar 
                price={price} 
                image={image} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailsContent;
