import React from 'react';

function PizzaHouse() {
  return (
    <div className="text-white" style={{ backgroundColor: '#333333' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="#home">Pizza House</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-0 position-relative text-center hero-section">
        <img src="/NeapolitanPizza.jpg" className="img-fluid w-100" alt="Neapolitan Pizza" style={{ objectFit: 'cover', height: '60vh' }} />
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="position-absolute top-50 start-50 translate-middle text-white fade-in">
          <h1 className="display-4 fw-bold mb-3">Neapolitan Pizza</h1>
          <p className="lead fs-4">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          <button className="btn btn-custom btn-lg mt-3">Order Now</button>
        </div>
      </div>

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

      <div className="container section-spacing">
        <h2 className="text-center mb-4 fade-in text-white">
          Book Your Table
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form className="mx-auto">
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name *" required />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email *" required />
                </div>
                <div className="col-md-4">
                  <select className="form-select">
                    <option defaultValue>Select a Service</option>
                    <option value="1">Dinner Booking</option>
                    <option value="2">Lunch Booking</option>
                    <option value="3">Private Event</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
              </div>
              <div className="text-left">
                <button type="submit" className="btn btn-warning">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-warning">Pizza House</h5>
              <p className="mb-0">Authentic Italian pizza made with love and tradition.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">&copy; 2025 Pizza House. All rights reserved.</p>
              <div className="mt-2">
                <span className="text-warning">📞</span> +84 396975611
                <span className="text-warning ms-3">📧</span> info@pizzahouse.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PizzaHouse;