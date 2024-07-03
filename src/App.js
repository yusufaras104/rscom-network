import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navs/Navbar';
import TopNav from './Components/Navs/TopNav';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Solutions from './Pages/Solutions/Solutions';
import News from './Pages/News/News';
import SolutionsDetails from './Pages/Solutions/SolutionsDetails';
import Fiberoptic from './Pages/Solutions/Fiber_Optic/Fiberoptic';
import DataCenterSolutions from './Pages/Solutions/Menu_Solutions/DataCenterSolutions';
import EnterpriseNetworkSolutions from './Pages/Solutions/Menu_Solutions/EnterpriseNetworkSolutions';
import TransportationNetworkSolutions from './Pages/Solutions/Menu_Solutions/Transportation_Network_Solutions';
import BroadcastandCATVNetworkSolutions from './Pages/Solutions/Menu_Solutions/BroadcastandCATVNetworkSolutions';
import TelecomandFTTxSolutions from './Pages/Solutions/Menu_Solutions/TelecomandFTTxSolutions';
import Privacy_Policy from './Pages/Privacy_Policy';
import './css/style.css';

function App() {
  return (
    <>
      <TopNav />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
        <Route path="/solutions" element={<Solutions />} >
        <Route path=":solutionsId" element={<SolutionsDetails />} />
        <Route path="fiber_optic" element={<Fiberoptic />} />
        <Route path="Data_Center_Solutions" element={<DataCenterSolutions />} />
        <Route path="Enterprise_Network_Solutions" element={<EnterpriseNetworkSolutions />} />
        <Route path="Transportation_Network_Solutions" element={<TransportationNetworkSolutions />} />
        <Route path="Broadcast_and_CATV_Network_Solutions" element={<BroadcastandCATVNetworkSolutions />} />
        <Route path="Telecom_and_FTTx_Solutions" element={<TelecomandFTTxSolutions />} />
        </Route>
        <Route path="*" element={<div className="container-fluid pt-5 bg-primary hero-header">
  <div className="container pt-5">
    <div className="row g-5 pt-5">
      <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          404 Error
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              404 Error
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-6 align-self-end text-center text-lg-end">
      </div>
    </div>
  </div>
</div>} />
      </Routes>

      <Footer />
<button className="btn btn-lg btn-warningS btn-lg-square back-to-top pt-2 left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <i className="bi bi-arrow-up" />
</button>
</>

    
  );
}

export default App;
