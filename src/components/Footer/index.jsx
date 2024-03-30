import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer mt-40 d-flex justify-between">
      <div className="footerLeft">
        <div className="footerLeftTop">
          <div className="cantry">
            <p className="ua">Украина </p>
            <p className="ep">Европа</p>
          </div>
          <div className="numberCantry">
            <h3 className="numUa">+38 089 42002 28</h3>
            <h3 className="numEp">+370 7 004 47 69</h3>
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
