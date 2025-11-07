import React from 'react';

function Menu() {
  return (
    <div className="container section-spacing">
      <h2 className="mb-4 fade-in text-white">
        Our Menu
      </h2>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 bg-white position-relative">
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-warning text-dark">SALE</span>
            </div>
            <img src="/PIZZAMARGHERITA.jpg" className="card-img-top" alt="Margherita Pizza" />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title text-dark">Margherita Pizza</h5>
              <p className="card-text text-dark">
                <del className="text-danger">$40.00</del> $24.00
              </p>
              <a href="#" className="btn btn-secondary mt-auto">Buy</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 bg-white">
            <img src="/MushroomPizza.jpg" className="card-img-top" alt="Mushroom Pizza" />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title text-dark">Mushroom Pizza</h5>
              <p className="card-text text-dark">$25.00</p>
              <a href="#" className="btn btn-secondary mt-auto">Buy</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 bg-white position-relative">
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-warning text-dark">NEW</span>
            </div>
            <img src="/HawaiianPizza.jpg" className="card-img-top" alt="Hawaiian Pizza" />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title text-dark">Hawaiian Pizza</h5>
              <p className="card-text text-dark">$30.00</p>
              <a href="#" className="btn btn-secondary mt-auto">Buy</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 bg-white position-relative">
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-warning text-dark">SALE</span>
            </div>
            <img src="/PestoPizza.jpg" className="card-img-top" alt="Pesto Pizza" />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title text-dark">Pesto Pizza</h5>
              <p className="card-text text-dark">
                <del className="text-danger">$40.00</del> $30.00
              </p>
              <a href="#" className="btn btn-secondary mt-auto">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
