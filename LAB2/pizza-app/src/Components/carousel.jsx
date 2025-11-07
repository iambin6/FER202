import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/carousel1.jpg" className="d-block w-100" alt="Pizza 1" style={{ objectFit: 'cover', height: '60vh' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Delicious Pizza</h5>
            <p>Fresh ingredients, authentic taste</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/carousel2.jpg" className="d-block w-100" alt="Pizza 2" style={{ objectFit: 'cover', height: '60vh' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Premium Quality</h5>
            <p>Made with love and tradition</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/carousel3.jpg" className="d-block w-100" alt="Pizza 3" style={{ objectFit: 'cover', height: '60vh' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Italian Style</h5>
            <p>Traditional recipes from Italy</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/carousel4.jpg" className="d-block w-100" alt="Pizza 4" style={{ objectFit: 'cover', height: '60vh' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fresh Ingredients</h5>
            <p>Only the finest ingredients</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/carousel5.jpg" className="d-block w-100" alt="Pizza 5" style={{ objectFit: 'cover', height: '60vh' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Perfect Taste</h5>
            <p>Experience the perfect pizza</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
