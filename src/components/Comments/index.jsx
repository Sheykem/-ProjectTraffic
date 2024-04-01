

import React, { useState } from 'react';
import './comments.css';
import OneComment from './OneComment';

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = {
        name: name,
        text: comment
      };
      setCommentsList([...commentsList, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comments">
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          name="comment"
          cols="30"
          rows="10"
          placeholder="Добавить комментарий..."
          required
        ></textarea>
        <p className='pt-30 pb-15'>Войти через :</p>
        <ul className="socList pb-30">
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
        <p className='pb-15'>Или как гость</p>
        <div className="inp">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Имя *"
            required
          />
        </div>
        <button type="submit" className="btn">Отправить</button>
      </form>
      <div className="oneComment">
        {commentsList.map((comment, index) => (
          <OneComment
            key={index}
            name={comment.name}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
