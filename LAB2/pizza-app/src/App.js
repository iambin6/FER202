import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Components/navbar';
import Carousel from './Components/carousel';
import Menu from './Components/menu';
import Booking from './Components/booking';

function App() {
  return (
    <div className="text-white" style={{ backgroundColor: '#333333' }}>
      <Navbar />
      <Carousel />
      <Menu />
      <Booking />
      
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

export default App;
