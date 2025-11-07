import React from 'react';

function Booking() {
  return (
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
  );
}

export default Booking;
