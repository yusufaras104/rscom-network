import pdfIcon from './pdf-svgrepo-com.svg'; // Importing the SVG file

function Main() {
    return(
        <div className="container-fluid bg-light mt-5 py-5">
  <div className="container py-5">
    <div className="row g-5 align-items-center">
      <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="btn btn-sm border rounded-pill text-warningS px-3 mb-3">
          Our Solutions
        </div>
        <h1 className="mb-4">
          Our Excellent Networking Solutions for Your Business
        </h1>
        <a className="btn btn-warningS rounded-pill px-4" href="/Rscom_datasheet.pdf">
      <span><img src={pdfIcon} width="35px" alt="PDF Icon" /></span>
      Read More
    </a>
      </div>
      <div className="col-lg-7">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div
                    className="service-icon btn-square"
                    style={{ fontWeight: 900, fontSize: 15 }}
                  >
                    <i className="bi bi-arrows-angle-contract fa-2x" />
                  </div>
                  <h5 className="mb-3">Fiber Optics</h5>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon btn-square">
                  <i class="bi bi-hdd-network fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Copper</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-md-4">
            <div className="row g-4">
              <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div
                    className="service-icon btn-square"
                    style={{ fontWeight: 900, fontSize: 15 }}
                  >
                    
                    <i className="bi bi-hdd-rack fa-2x " />
                  </div>
                  <h5 className="mb-3">Rack Systems</h5>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div
                    className="service-icon btn-square"
                    style={{ fontWeight: 900, fontSize: 15 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-ethernet"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 13.5v-7a.5.5 0 0 0-.5-.5H12V4.5a.5.5 0 0 0-.5-.5h-1v-.5A.5.5 0 0 0 10 3H6a.5.5 0 0 0-.5.5V4h-1a.5.5 0 0 0-.5.5V6H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5M3.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m2 0h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zM9.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <h5 className="mb-3">Structured Cabling</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Main;