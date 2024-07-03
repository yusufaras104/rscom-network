import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c2ost0l', 'template_bvspfdt', form.current, {
        publicKey: 'W6dgHIzojnbvEpmpF',
      })
      .then(
        () => {
          alert('Email send SUCCESS!');
        },
        (error) => {
          alert('FAILED... ' + error.text);
        }
      );
  };

    return(
        <>
        
  {/* Hero Start */}
  <div className="container-fluid pt-5 bg-primary hero-header">
    <div className="container pt-5">
      <div className="row g-5 pt-5">
        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 className="display-4 text-white mb-4 animated slideInRight">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(20, 24, 62, 0.7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn btn-square bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-light p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-light px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
          Contact Us
        </div>
        <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
      </div>





      
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="wow fadeIn" data-wow-delay="0.3s">
          <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      type="text" name="user_name"
                    />
                    <label htmlFor="name" >Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email" name="user_email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 150 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <input className="btn btn-primary w-100 py-3" type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>





    </div>
  </div>
  {/* Contact End */}
  <div className="container-fluid py-5">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="about-img about-img-cont">
         
        <iframe
  classname="img-fluid"
  title="Google Maps embed of Kingston upon Thames"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1517303870596!2d-0.30586405!3d51.400266699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760bb8142577c9%3A0xaf12e5453186ee93!2sKingston%20upon%20Thames%20KT1%202EP!5e0!3m2!1sen!2suk!4v1712838946964!5m2!1sen!2suk"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
        <div className="box green" />
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <h1 className="mb-4">
          Contact Details{" "}
        </h1>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
        <h5 className="text-white mb-4">Get In Touch</h5>
        <p>
          <i className="fa fa-map-marker-alt me-3" />
          Kingston upon Thames, Surrey, KT1 2EP, London/UK
        </p>
        <p>
          <i className="fa fa-phone-alt me-3" />
          +44 7741954333
        </p>
        <p>
          <i className="fa fa-envelope me-3" />
          info@rscomnetwork.com
        </p>
      </div>
        <div className="row g-3">
          <div className="col-sm-6">
            <h6 className="mb-3">
              <i className="fa fa-check text-warningS me-2" />
              Recognized for Excellence
            </h6>
            <h6 className="mb-0">
              <i className="fa fa-check text-warningS me-2" />
              Highly Skilled Professionals
            </h6>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">
              <i className="fa fa-check text-warningS me-2" />
              24/7 Dedicated Support
            </h6>
            <h6 className="mb-0">
              <i className="fa fa-check text-warningS me-2" />
              Competitive Pricing
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <a className="btn btn-warningS rounded-pill px-4 me-3" href="/about ">
            Read More
          </a>
          <div className="btn btn-outline-warningS btn-square me-3">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="btn btn-outline-warningS btn-square me-3">
            <i className="fab fa-twitter" />
          </div>
          <div className="btn btn-outline-warningS btn-square me-3">
            <i className="fab fa-instagram" />
          </div>
          <div className="btn btn-outline-warningS btn-square">
            <i className="fab fa-linkedin-in" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

    )
}

export default Contact;