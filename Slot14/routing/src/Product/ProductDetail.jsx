import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Dữ liệu mẫu cho các sản phẩm
  const productData = {
    '101': {
      id: 101,
      name: 'iPhone 15',
      price: '25.000.000 VND',
      description: 'iPhone 15 với chip A16 Bionic mạnh mẽ, camera 48MP và màn hình Super Retina XDR 6.1 inch.',
      specs: [
        'Chip: Apple A16 Bionic',
        'RAM: 6GB',
        'Bộ nhớ: 128GB/256GB/512GB',
        'Camera sau: 48MP + 12MP',
        'Camera trước: 12MP',
        'Pin: 3279mAh'
      ]
    },
    '102': {
      id: 102,
      name: 'Samsung Galaxy S24',
      price: '20.000.000 VND',
      description: 'Samsung Galaxy S24 với màn hình Dynamic AMOLED 2X, camera AI và hiệu năng vượt trội.',
      specs: [
        'Chip: Snapdragon 8 Gen 3',
        'RAM: 8GB',
        'Bộ nhớ: 256GB/512GB',
        'Camera sau: 50MP + 12MP + 10MP',
        'Camera trước: 12MP',
        'Pin: 4000mAh'
      ]
    },
    '103': {
      id: 103,
      name: 'MacBook Pro M3',
      price: '45.000.000 VND',
      description: 'MacBook Pro M3 với hiệu năng đột phá, màn hình Liquid Retina XDR và thời lượng pin ấn tượng.',
      specs: [
        'Chip: Apple M3',
        'RAM: 8GB/16GB/32GB',
        'Bộ nhớ: 512GB/1TB/2TB SSD',
        'Màn hình: 14 inch Liquid Retina XDR',
        'Card đồ họa: GPU 10-core',
        'Pin: Lên đến 17 giờ'
      ]
    }
  };

  const product = productData[productId];

  const handleGoBack = () => {
    navigate('/Product');
  };

  if (!product) {
    return (
      <div className="page">
        <div className="product-detail-not-found">
          <h1>⚠️ Sản phẩm không tồn tại</h1>
          <p>Không tìm thấy sản phẩm với ID: {productId}</p>
          <button onClick={handleGoBack} className="btn-primary">
            Quay lại trang sản phẩm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="product-detail">
        <div className="product-detail-header">
          <h1>Chi tiết sản phẩm: {product.name}</h1>
          <span className="product-id">ID: {productId}</span>
        </div>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <div className="product-image-placeholder">
              📱 {product.name}
            </div>
          </div>

          <div className="product-detail-info">
            <div className="product-price-large">{product.price}</div>
            
            <div className="product-description">
              <h3>Mô tả sản phẩm</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-specs">
              <h3>Thông số kỹ thuật</h3>
              <ul>
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <button className="btn-primary btn-large">
                🛒 Thêm vào giỏ hàng
              </button>
              <button className="btn-secondary btn-large">
                ❤️ Yêu thích
              </button>
            </div>

            <button onClick={handleGoBack} className="btn-back">
              ← Quay lại trang sản phẩm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

