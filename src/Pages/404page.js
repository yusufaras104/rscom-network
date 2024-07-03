import React from 'react'

const p404page = () => {
  return (
    <div className="container-fluid pt-5 bg-primary hero-header">
  <div className="container pt-5">
    <div className="row g-5 pt-5">
      <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          404 Error
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="/">
                Home
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
</div>

  )
}

export default p404page;