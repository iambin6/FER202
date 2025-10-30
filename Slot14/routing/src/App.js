import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Products from './Product/Products.jsx';
import ProductDetail from './Product/ProductDetail.jsx';
import Contact from './Contact/Contact.jsx';
import DashboardLayout from './Dashboard/DashboardLayout.jsx';
import DashboardHome from './Dashboard/DashboardHome.jsx';
import Settings from './Dashboard/Settings.jsx';
import Reports from './Dashboard/Reports.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/san-pham/:productId" element={<ProductDetail />} />
            <Route path="/Contact" element={<Contact />} />
            
            {/* Nested Routes cho Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="settings" element={<Settings />} />
              <Route path="reports" element={<Reports />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
