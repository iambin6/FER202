import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 101, name: 'iPhone 15', price: '25.000.000 VND', category: 'Điện thoại' },
    { id: 102, name: 'Samsung Galaxy S24', price: '20.000.000 VND', category: 'Điện thoại' },
    { id: 103, name: 'MacBook Pro M3', price: '45.000.000 VND', category: 'Laptop' }
  ];

  return (
    <div className="page">
      <h1>Sản Phẩm</h1>
      <p>Danh sách các sản phẩm hiện có:</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-category">{product.category}</div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <Link to={`/san-pham/${product.id}`}>
              <button className="btn-primary">Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
