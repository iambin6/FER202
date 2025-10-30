import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Demo</h2>
      </div>
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            Trang Chủ
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink 
            to="/Product" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Sản Phẩm
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink 
            to="/Contact" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Liên Hệ
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
