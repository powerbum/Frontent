import React, { useState } from "react";
import contact from "../../images/contact.png";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkndakne");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <section className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={contact} alt="contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                {state.succeeded ? (
                  <p>Thank you for contacting us! We will get back to you shortly.</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            required
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            cols="30"
                            rows="6"
                            required
                            placeholder="Write your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn" disabled={state.submitting}>
                          <i className="flaticon-tick"></i>
                          Send Message <span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
