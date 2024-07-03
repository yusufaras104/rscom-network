function News() {
    return(
        <>
  {/* Hero Start */}
  <div className="container-fluid pt-5 bg-primary hero-header">
    <div className="container pt-5">
      <div className="row g-5 pt-5">
        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 className="display-4 text-white mb-4 animated slideInRight">
            Our Projects
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
  {/* Case Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
        References
        </div>
        <h1 className="mb-4">RScom Network's Sources and Citations</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="case-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/2022-wimbledon-general-view.jpg" alt="" />
            <a className="case-overlay text-decoration-none" href="">
              <small>London, United Kingdom</small>
              <h5 className="lh-base text-white mb-3">
              Wimbledon 
Stadium, Junior Cort
              </h5>
            </a>
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div className="case-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/13113502-6837c8dd-25ee-41b3-8265-ba9bd3b517cb (1).avif" alt="" />
            <a className="case-overlay text-decoration-none" href="">
              <small>London, United Kingdom</small>
              <h5 className="lh-base text-white mb-3">
              Everyman 
Cinema
              </h5>
            </a>
          </div>
        </div>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
          <div className="case-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/defaultContentHeader.jpg" alt="" />
            <a className="case-overlay text-decoration-none" href="">
              <small>London, United Kingdom</small>
              <h5 className="lh-base text-white mb-3">
              Wimbledon 
Center 
Stadium
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Case End */}
  {/* FAQs Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
          Popular FAQs
        </div>
        <h1 className="mb-4">Frequently Asked Questions</h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ1">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What industries do you serve?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                RScom Network provides solutions for a wide range of industries, including data centers, enterprise networks, transportation networks, broadcast and CATV networks, telecom, and FTTx deployments.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Are your products customizable?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                Yes, we offer customizable solutions tailored to meet the specific requirements of our clients. Whether you need a bespoke network infrastructure or customized rack systems, we can work with you to design and implement the ideal solution for your needs.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.3s">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do you ensure the reliability of your products?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                We adhere to stringent quality control measures and industry standards to ensure the reliability and performance of our products. Additionally, our products undergo rigorous testing and quality assurance processes to meet the highest standards of reliability and durability.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  What kind of support do you offer?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                We offer comprehensive customer support to assist you throughout the entire lifecycle of your project. Our dedicated support team is available to provide assistance and guidance during the planning, implementation, and maintenance phases, ensuring that your project is completed smoothly and efficiently.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ2">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Can you help with installation and deployment?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Yes, we offer installation and deployment services to help ensure the seamless integration of our solutions into your infrastructure. Our experienced technicians will work closely with you to install and configure your network infrastructure, ensuring that it meets your specific requirements and objectives.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Do you provide training for using your products?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Yes, we offer training programs to help you and your team effectively use and manage our products. Our training sessions cover everything from product features and functionality to best practices for maintenance and troubleshooting, empowering you to maximize the value of your investment.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.7s">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  What are your lead times for product delivery?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                Lead times for product delivery may vary depending on the specific requirements of your project and the availability of products. Our sales team will work closely with you to provide accurate lead time estimates and keep you informed throughout the ordering and delivery process.
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.8s">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  How can I request a quote for your products and services?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                You can request a quote by contacting our sales team directly or filling out the inquiry form on our website. Our team will respond promptly to discuss your requirements, provide pricing information, and assist you with any questions you may have.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQs Start */}
</>

    )
}

export default News;