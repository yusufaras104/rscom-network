function Footer() {
    return(
        <div className="container-fluid bg-dark text-white-50 footer pt-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
        <a href="https://www.systhames.co.uk">
          <img
            src="./img/rscomLogo.png"
            width="40%"
            style={{}}
            alt=""
            srcSet=""
          />
        </a>
        <p className="mb-0">
        RScom Network specializes in delivering customer-centric design and adaptable network physical infrastructure solutions across diverse sectors.
        </p>
      </div>
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
        <div className="d-flex pt-2">
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
        <h5 className="text-white mb-4">Popular Link</h5>
        <a className="btn btn-link" href="/about">
          About Us
        </a>
        <a className="btn btn-link" href="/contact">
          Contact Us
        </a>
        <a className="btn btn-link" href="/PrivacyPolicy">
          Privacy Policy
        </a>

        <a className="btn btn-link" href= "/">
          Terms &amp; Condition
        </a>
        <a className="btn btn-link" href="/solutions">
        All Solutions...
        </a>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
        <h5 className="text-white mb-4">Our Services</h5>
        <a className="btn btn-link" href="/solutions/Data_Center_Solutions">
        Data Center
        </a>
        <a className="btn btn-link" href="/solutions/Enterprise_Network_Solutions">
        Enterprise Network
        </a>
        <a className="btn btn-link" href="/solutions/Transportation_Network_Solutions">
        Transportation Network
        </a>
        <a className="btn btn-link" href="/solutions/Broadcast_and_CATV_Network_Solutions">
        Broadcast and CATV
        </a>
        <a className="btn btn-link" href="/solutions/Telecom_and_FTTx_Solutions">
        Telecom and FTTx
        </a>
      </div>
    </div>
  </div>
  <div className="container wow fadeIn" data-wow-delay="0.1s">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="/">
            RScom Networking LTD.
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href="/">Home</a>
            <a href="/">Cookies</a>
            <a href="/solutions">Help</a>
            <a href="/News">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Footer;