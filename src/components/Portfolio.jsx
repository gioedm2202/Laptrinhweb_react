import React from 'react';

function Portfolio() {
  // Hàm xử lý lỗi tải ảnh, tương đương với 'onerror'
  const handleImageError = (e) => {
    e.target.onerror = null; // Ngăn lặp vô hạn
    e.target.src = 'https://placehold.co/600x400/5a88c7/ffffff?text=Lỗi+Tải+Ảnh&fontsize=16';
  };

  return (
    <section id="portfolio" className="content-section">
      <h2>Các Dự Án Của Tôi</h2>
      <div className="portfolio-grid">
        
        <div className="portfolio-item">
          <img 
            src="/img/bieudo.png" 
            alt="Dự án 1 - Phân tích dữ liệu"
            onError={handleImageError} 
          />
          <h3>Dự Án 1</h3>
          <p>Phân tích dữ liệu!
              Sử dụng Python và thư viện Pandas, numpy để phân tích dữ liệu bán hàng và tạo báo cáo trực quan.
          </p>
        </div>
        
        <div className="portfolio-item">
          <img 
            src="/img/z7167264634414_15a3eac22d93ee8b5b467928ebf6e460.jpg" 
            alt="Dự án 2 - Cảnh Liyue"
            onError={handleImageError} 
          />
          <h3>Dự Án 2</h3>
          <p>Mô phỏng và tạo mạch dao động cơ bản dùng IC NE555!</p>
        </div>
        
        <div className="portfolio-item">
          <img 
            src="/img/z7167143897988_9adcff24492365ab6064a421ebec47ad.jpg" 
            alt="Dự án 3 - Cảnh Inazuma"
            onError={handleImageError} 
          />
          <h3>Dự án 3</h3>
          <p>Băng truyền phân loại!
              Hệ thống băng truyền phân loại tự động sử dụng cảm biến ánh sáng TCS34725 để phát hiện và phân loại các vật thể dựa trên màu sắc của chúng.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Portfolio;