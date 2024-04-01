import './index.css';
import React, { useState, useEffect } from 'react';
import BannerComponent from './components/BannerComponent';
import ImageComponent from './components/ImageComponent';
import VideoComponent from './components/VideoComponent';
import Comments from './components/Comments';
import Footer from './components/Footer';
import SpecialGive from './components/specialGive';
import WhatYouGet from './components/WhaYouGet';
function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const currentTime = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const currentHour = parseInt(currentTime.split(':')[0]);

    if (currentHour >= 18 && currentHour < 18.33) {
      setContent(<VideoComponent />);
    } else if (currentHour >= 18.33 && currentHour < 21) {
      setContent(<BannerComponent />);
    } else {
      setContent(<ImageComponent />);
    }
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="content d-flex ">
          <div className="baner">
            {content}
            <div className="titleBanerBlock mt-25">
              <h2 className="titleBaner">Как создать прирост траифка и прожаж в 2023 году ?</h2>
              <SpecialGive />
              <h3 className="title text-center mt-50">Ты получишь:</h3>
              <WhatYouGet />
              {/* нужный текст */}
            </div>
          </div>
          <Comments />
        </div>
        <div className="line"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
