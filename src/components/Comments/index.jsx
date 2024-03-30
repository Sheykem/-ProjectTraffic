import React from "react";
import "./comments.css";
import OneComment from "./OneComment";
const Comments = () => {
  return (
    <div className="comments">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Добавить коментарий..."
      ></textarea>
      <p>Войти через :</p>
      <ul className="socList">
        <li>
          <img src="/img/soc/Facebook - Original.png" alt="Facebook" />
        </li>
        <li>
          <img src="/img/soc/Twitter - Original.png" alt="Twiter" />
        </li>
        <li>
          <img src="/img/soc/Google - Original.png" alt="Google" />
        </li>
        <li>
          <img src="/img/soc/Artboard.png" alt="Telegramm" />
        </li>
        <li>
          <img src="/img/soc/vk.png" alt="VK" />
        </li>
        <li>
          <img src="/img/soc/Yandex.png" alt="Yandex" />
        </li>
      </ul>
      <p>Или как гость</p>
      <div className="inp">
        <input type="text" placeholder="Имя *" />
        <img src="" alt="" />
      </div>
      <button className="btn">Отправить</button>
      <div className="oneComment">
        <OneComment />
      </div>
    </div>
  );
};

export default Comments;
