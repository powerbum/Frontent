import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import subscribeImg1 from "../../images/subscribe-img1.png";
import shape6 from "../../images/shape/vector-shape6.png";

const Subscribe = () => {
  const [state, handleSubmit] = useForm("mldrqozo");
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
                <h2>Naujienlaiškio prenumerata</h2>
                {state.succeeded ? (
                  <p>Ačiu!</p>
                ) : (
                  <div>

                <p>
                Būkite pirmi sužinoję apie geriausius pasiūlymus ir rinkos naujienas
                </p>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="El. paštas"
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
                        {/* <i className="flaticon-tick"></i> */}
                        Prenumeruoti <span></span>
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