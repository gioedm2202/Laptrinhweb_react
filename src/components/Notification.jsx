import React from 'react';

function Notification({ message, type, isVisible }) {
  return (
    <div 
      id="message-box" 
      // Thêm class 'show' nếu isVisible là true
      className={isVisible ? 'show' : ''}
      // Đặt màu nền dựa trên 'type'
      style={{ 
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336' 
      }}
    >
      {message}
    </div>
  );
}

export default Notification;