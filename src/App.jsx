import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ApiTesting from './components/ApiTesting'; // <-- THÊM DÒNG NÀY
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
  const [notification, setNotification] = useState({ message: '', type: 'success' });
  const [isNotifyVisible, setIsNotifyVisible] = useState(false);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setIsNotifyVisible(true);
    
    setTimeout(() => {
      setIsNotifyVisible(false);
    }, 3000);
  };

  return (
    <>
      <div className="overlay"></div>
      
      <Notification 
        message={notification.message} 
        type={notification.type} 
        isVisible={isNotifyVisible} 
      />
      
      <Header />
      
      <main>
        <Home />
        <About />
        <Portfolio />
        
        {/* THÊM COMPONENT MỚI VÀ TRUYỀN HÀM THÔNG BÁO VÀO */}
        <ApiTesting showNotification={showNotification} /> 
        
        <Contact showNotification={showNotification} />
      </main>
      
      <Footer />
    </>
  );
}

export default App;