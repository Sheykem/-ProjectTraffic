import "./index.css";
import React, { useState, useEffect } from "react";
import BannerComponent from "./components/BannerComponent";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const currentTime = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const currentHour = parseInt(currentTime.split(":")[0]);

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
            <div className="mt-25">
              <h2 className="titleBaner">
                Как создать прирост траифка в 2023 году ?
              </h2>
              <img width={950} height={140} src="/img/banerBottom.png" alt="" />
              <h3 className="title text-center">Ты получишь:</h3>
              <div className="text-center mt-40">
                <img src="/img/Puntks.png" alt="Punkts" />
              </div>
            </div>
          </div>
          <Comments />
        </div>
      </div>
      <div className="line"></div>
      <Footer />
    </div>
  );
}

export default App;
