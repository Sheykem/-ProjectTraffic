import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer mt-40 d-flex justify-between">
      <div className="footerLeft">
        <div className="footerLeftTop">
          <div className="cantry">
            <p className="ua opacity-5">Украина </p>
            <p className="ep opacity-5">Европа</p>
          </div>
          <div className="numberCantry">
            <h3 className="numUa">+38 089 42002 28</h3>
            <h3 className="numEp">+370 7 004 47 69</h3>
          </div>
          <div className="contacts d-flex justify-between">
            <div className="firstP d-flex ">
              <img src="/img/soc/telegramFooter.png" alt="" />
              <h4>Telegram</h4>
            </div>
            <div className="secondP d-flex">
              <img src="/img/soc/emailImg.png" alt="" />
              <h4>info@alexyanovsky.info</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footerRight">
        <div className="right">
          <p>Дистанционный разговор</p>
          <p>Архив дистанционных договоров до 2022 года</p>
          <p>© 2022ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
