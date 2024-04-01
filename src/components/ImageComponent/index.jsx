import React from 'react';
import './imageComponent.css';
const ImageComponent = () => {
  return (
    <div className="imageComponent">
      {/* <h2>Картинка и комментарии</h2> */}
      <a href="https://alexyanovsky.com/udvoenie_pribyli?utm_source=trafik_web ">
        <img width={950} height={534} src="/img/TreningAddMoney.png" alt="picturMentor" />
      </a>
    </div>
  );
};

export default ImageComponent;
