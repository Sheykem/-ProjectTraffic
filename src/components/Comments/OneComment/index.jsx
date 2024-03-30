import React from "react";

const OneComment = () => {
  return (
    <div className="comment">
      <div className="item">
        <div className="d-flex align-center">
          <div className="pr-10">
            <img src="/img/commentImg/ava.png" alt="ava" />
          </div>
          <div>
            <p>Светлана</p>
            <p>2 дня назад</p>
          </div>
        </div>
        <div>
          <p>Текстовое поле</p>
        </div>
        <div className="d-flex justify-between">
          <div className="d-flex">
            <img
              className="pr-10"
              src="/img/commentImg/Answer.svg"
              alt="answer"
            />
            <p>Ответить</p>
          </div>
          <div className="rightFuntional d-flex">
            <img className="mr-10" src="/img/commentImg/Like.svg" alt="like" />
            <p className="mr-15">0</p>
            <img
              className="mr-10"
              src="/img/commentImg/Dislike.svg"
              alt="dislike"
            />
            <p className="mr-15">0</p>
            <img
              className=""
              src="/img/commentImg/OptionComment.svg"
              alt="option"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
