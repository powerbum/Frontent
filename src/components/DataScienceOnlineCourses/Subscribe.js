import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import subscribeImg1 from "../../images/subscribe-img1.png";
import shape6 from "../../images/shape/vector-shape6.png";

const Subscribe = () => {
  const [state, handleSubmit] = useForm("xdoqvyka");
  const [email, setEmail] = useState('');


  return (
    <>
      <div className="subscribe-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="subscribe-image">
                <img src={subscribeImg1} alt="subscribe" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="subscribe-content">
                <h2>Subscribe And Get The Latest Information</h2>
                {state.succeeded ? (
                  <p>Thank you for subscribing!</p>
                ) : (
                  <div>

                <p>
                Stay informed on AI-powered battery charging solutions. Subscribe to our newsletter for the latest news, insights, and exclusive offers. Join our community and optimize your home energy management today!
                </p>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Enter your email address"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <button type="submit" className="default-btn" disabled={state.submitting}>
                        <i className="flaticon-tick"></i>
                        Subscribe Now <span></span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape6">
          <img src={shape6} alt="shape" />
        </div>
      </div>
    </>
  );
};

export default Subscribe;