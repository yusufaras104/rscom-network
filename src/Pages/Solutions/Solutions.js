
import React, { useState, useEffect } from'react';
import { Outlet, useLocation } from 'react-router-dom';
import Main from './Main';
import Tabs from './tabs';
const shouldRenderSolutionsWrapper = (path) => {
  return path === '/solutions' || path === '/solutions/';
};

const SolutionsWrapper = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {shouldRenderSolutionsWrapper(pathname) && (
        <div className="container-fluid pt-5 hero-header mb-5">
          <div className="slider-container">
            <div className="slide2">
              <div className="container pt-5">
                <div className="row g-5 pt-5">
                  <div className="col-lg-8 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-6 text-white mb-1 animated slideInRight">
                      Our Solutions
                    </h1>
                    <p className="text-white mb-1 animated slideInRight">
                      At RScom Network, we pride ourselves on being a leading provider of flexible network infrastructure solutions, catering to a diverse range of sectors. Our products are designed to meet the unique demands of various industries, including Data Centers, Enterprise Networks, Transportation Networks, Broadcast and CATV Networks, as well as Telecom and FTTx sectors. With a team of highly skilled professionals boasting over ten years of industry experience, we are committed to delivering customer-centric design and adaptable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {shouldRenderSolutionsWrapper(pathname) && <Main />}
    </>
  );
};

export const Solutions = () => {


  return (
    <>
      <SolutionsWrapper />
      <Outlet />
      <Tabs />
    </>
  );
};

export default Solutions;