import React, { useState } from 'react';

const OneComment = ({ name, text }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="comment">
      <div className="item">
        <div className="d-flex align-center">
          <div className="pr-10">
            <img src="/img/commentImg/ava.png" alt="ava" />
          </div>
          <div className="personInfo">
            <p className="namePerson pb-10">{name}</p>
            <p className="onlinePerson pb-10">2 дня назад</p>
          </div>
        </div>
        <div>
          <p className="textPerson pt-15 ">{text}</p>
        </div>
        <div className="d-flex justify-between pt-15 pb-25">
          <div className="d-flex">
            <img className="pr-10 cu-p" src="/img/commentImg/Answer.svg" alt="answer" />
            <p className="">Ответить</p>
          </div>
          <div className="rightFuntional d-flex">
            <img
              className="mr-10 cu-p"
              src="/img/commentImg/Like.svg"
              alt="like"
              onClick={handleLike}
            />
            <p className="mr-15">{likes}</p>
            <img
              className="mr-10 cu-p"
              src="/img/commentImg/Dislike.svg"
              alt="dislike"
              onClick={handleDislike}
            />
            <p className="mr-15">{dislikes}</p>
            <img className="cu-p" src="/img/commentImg/OptionComment.svg" alt="option" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
