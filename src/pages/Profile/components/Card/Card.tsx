import React from "react";

import s from "./Card.module.scss";

export const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.avatar}>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt=""
        />
      </div>
      <div className={s.role}>
        <p>Тренер</p>
      </div>
      <div className={s.name}>
        <p>Василий Пупкин</p>
      </div>
      <div className={s.mail}>
        <p>mikle@newshift.com</p>
      </div>
      <div className={s.phone}>
        <p>8 (999) 653-32-23</p>
      </div>
      <div className={s.experience}>
        <div className={s.title}>
          <p>Опыт работы:</p>
        </div>
        <div className={s.text}>
          <p>8 лет</p>
        </div>
      </div>
      <div className={s.education}>
        <div className={s.title}>
          <p>Образование:</p>
        </div>
        <div className={s.text}>
          <p>МГУ 2005-2010</p>
        </div>
      </div>

      <div className={s.edit}>
        <div className={s.icon}>
          <img src="./images/icons/Edit.svg" alt="" />
        </div>
        <a href="#">редактировать</a>
      </div>
    </div>
  );
};
