import React from "react";

const TransportationNetworkSolutions = () => {
  return (
    <>
      <div className="container-fluid pt-5 hero-header mb-5">
        <div className="slider-container">
          <div className="slide2">
            <div className="container pt-5">
              <div className="row g-5 pt-5">
                <div className="col-lg-8 align-self-center text-center text-lg-start mb-lg-5">
                  <h1 className="display-6 text-white mb-1 animated slideInRight">
                  Transportation Network Solutions
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
                        Transportation Network Solutions
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
                  alt= ""
                />
              </div>
              <div className="box green" />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-warningS px-3 mb-3">
              Transportation Network Solutions
              </div>
              <h1 className="mb-4">
                RScom Network{" "}
                <span className="more-about-us-home">
                  - Leading Provider of Flexible Network Infrastructure
                  Solutions
                </span>
              </h1>
              <p className="mb-4">
              RScom Network offers robust and reliable transportation network solutions tailored to meet the unique demands of transportation hubs, railways, and airports. Our comprehensive range of products is engineered to withstand harsh environmental conditions and provide seamless connectivity for critical transportation infrastructure.
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
            Robust Network Infrastructure{" "}
            </h5>
            <p className="mb-0">
            Our transportation network infrastructure solutions are designed to ensure reliable communication and data transmission in demanding environments. From railway stations to airport terminals, our products provide the backbone for efficient and secure transportation networks, enabling seamless passenger experiences and operational efficiency.
            </p>
            <h5 className="mb-0">Durable Fiber Optic and Copper Systems</h5>
            <p className="mb-0">
            Experience unparalleled durability and performance with our fiber optic and copper systems built to withstand harsh environmental conditions. Whether it's extreme temperatures, moisture, or vibration, our products are engineered to deliver reliable connectivity and data transmission in any transportation environment.
            </p>
            <h5 className="mb-0">Modular Rack Systems </h5>
            <p className="mb-0">
            Optimize space utilization and streamline operations with our modular rack systems designed for transportation facilities. Our rack solutions are scalable and adaptable, allowing you to maximize space efficiency while accommodating the evolving needs of your transportation network infrastructure.
            </p>
            <h5 className="mb-0">
            Learn More About Our Transportation Network Solutions{" "}
            </h5>
            <p className="mb-0">
            Explore our range of transportation network solutions to discover how RScom Network can help you build a reliable and resilient network infrastructure for transportation hubs, railways, and airports. <a href="/contact">Contact us</a> today to speak with one of our experts and discuss your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportationNetworkSolutions;
