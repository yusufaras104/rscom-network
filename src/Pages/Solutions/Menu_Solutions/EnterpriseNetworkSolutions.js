import React from "react";

const EnterpriseNetworkSolutions = () => {
  return (
    <>
      <div className="container-fluid pt-5 hero-header mb-5">
        <div className="slider-container">
          <div className="slide2">
            <div className="container pt-5">
              <div className="row g-5 pt-5">
                <div className="col-lg-8 align-self-center text-center text-lg-start mb-lg-5">
                  <h1 className="display-6 text-white mb-1 animated slideInRight">
                    Enterprise Network Solutions
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                      <li className="breadcrumb-item">
                        <a className="text-white" href="/">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-white" href="/solutions">
                          Solutions
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Enterprise Network Solutions
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img about-img-cont">
                <img
                  className="img-fluid"
                  src="img/futuristic-computer-network-connects-global-industry-modern-warehouse-generated-by-artificial-intelligence.jpg"
                  alt=""
                />
              </div>
              <div className="box green" />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-warningS px-3 mb-3">
                Enterprise Network Solutions
              </div>
              <h1 className="mb-4">
                RScom Network{" "}
                <span className="more-about-us-home">
                  - Leading Provider of Flexible Network Infrastructure
                  Solutions
                </span>
              </h1>
              <p className="mb-4">
                At RScom Network, we understand the unique networking challenges
                faced by businesses of all sizes. That's why we offer
                customizable enterprise network solutions designed to meet your
                organization's specific requirements. From reliable fiber optic
                and copper systems to flexible rack solutions, our comprehensive
                range of products is engineered to deliver high-performance
                networking infrastructure that scales with your business.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-warningS me-2" />
                    Expertise
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-warningS me-2" />
                    Quality Assurance
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-warningS me-2" />
                    Scalability
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-warningS me-2" />
                    Customer Satisfaction
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a
                  className="btn btn-warningS rounded-pill px-4 me-3"
                  href="Rscom_datasheet.pdf"
                >
                  Read PDF
                </a>
                <a
                  className="btn btn-warningS rounded-pill px-4 me-3"
                  href="/solutions"
                >
                  See all Solutions ..
                </a>
              </div>
            </div>
            <h5 className="mb-0">
              Customizable Network Infrastructure Solutions{" "}
            </h5>
            <p className="mb-0">
              Our customizable network infrastructure solutions are tailored to
              the unique needs of businesses, allowing you to build a network
              that aligns perfectly with your organizational goals. Whether
              you're a small startup or a large enterprise, our experts will
              work closely with you to design and implement a network solution
              that meets your current needs and accommodates future growth.
            </p>
            <h5 className="mb-0">Reliable Fiber Optic and Copper Systems </h5>
            <p className="mb-0">
              Experience lightning-fast data transmission with our reliable
              fiber optic and copper systems. Engineered for high-speed
              connectivity and unmatched reliability, our products ensure
              seamless communication across your enterprise network. From
              data-intensive applications to real-time collaboration, our fiber
              optic and copper systems provide the performance and reliability
              your business demands.
            </p>
            <h5 className="mb-0">Flexible Rack Solutions </h5>
            <p className="mb-0">
              Stay agile and adaptable with our flexible rack solutions designed
              to accommodate evolving networking needs. Whether you need to
              expand your network infrastructure or optimize your existing
              setup, our modular rack systems provide the flexibility you need
              to meet changing business requirements. With customizable
              configurations and scalable designs, our rack solutions empower
              you to build a network infrastructure that grows with your
              business.
            </p>
            <h5 className="mb-0">
              Learn More About Our Enterprise Network Solutions{" "}
            </h5>
            <p className="mb-0">
              Explore our range of enterprise network solutions to discover how
              RScom Network can help you build a reliable and scalable network
              infrastructure for your business.{" "}
              <a href="/contact">Contact us</a> today to speak with one of our
              experts and discuss your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseNetworkSolutions;
