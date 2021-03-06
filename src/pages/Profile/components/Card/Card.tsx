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
      <div className={s.cardInfo}>
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
            <p>
              Опыт работы: <br />
              <span className={s.text}>8 лет</span>
            </p>
          </div>
        </div>
        <div className={s.education}>
          <div className={s.title}>
            <p>
              Образование: <br />
              <span className={s.text}>МГУ 2005-2010</span>
            </p>
          </div>
        </div>

        <div className={s.edit}>
          <div className={s.icon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4165 16.5827H16.7307"
                stroke="#6F61D0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7126 4.13097C11.3268 3.34847 12.3193 3.38931 13.1026 4.00347L14.2609 4.91181C15.0443 5.52597 15.3218 6.47847 14.7076 7.26264L7.80009 16.0751C7.56926 16.3701 7.21676 16.5443 6.84176 16.5485L4.17759 16.5826L3.57426 13.9868C3.48926 13.6226 3.57426 13.2393 3.80509 12.9435L10.7126 4.13097Z"
                stroke="#6F61D0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.41919 5.78125L13.4142 8.91292"
                stroke="#6F61D0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <a href="#">редактировать</a>
        </div>
      </div>
    </div>
  );
};
