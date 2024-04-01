import React from 'react';
import './specialGive.css';
const SpecialGive = () => {
  return (
    <div className="p-15 specGive">
      <div className=" d-flex align-center pr-10">
        <img className="mr-10" width={10} height={10} src="/img/Point.png" alt="point" />
        <h4 className="specGiveH4">Тренинг</h4>
      </div>
      <div className="twoMany d-flex pt-10">
        <h2>УДВОЕНИЕ ПРИБЫЛИ</h2>
        <div className="specTake pl-50">
          <p>
            <span className='off'> Только до конца месяца действует</span>
            <span className="spanColor">специальное предложение!</span>
          </p>
          <p>Подробности у куратора после регистрации</p>
        </div>
      </div>
      <div className="bottomDiv d-flex mt-5 ">
        <div className="pr-50">
          <p>Ты увеличишь прибыль в своем </p>
          <p>бизнесе от 2 до 6 раз за 3 месяца!</p>
        </div>
        <button className="btnGive">Получить спецпредложение</button>
        <div className="alexPhoto">
          <img className="alexPhone" src="/img/phoneAlex.png" alt="" />
          <img className="alexPhoto" src="/img/alex.png" />
        </div>
      </div>
    </div>
  );
};

export default SpecialGive;
