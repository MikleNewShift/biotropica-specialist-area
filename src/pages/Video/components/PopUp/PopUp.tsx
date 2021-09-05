import React, { Dispatch, SetStateAction } from "react";

import s from "./PopUp.module.scss";

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
}

export const PopUp = ({ setPopup }: Props) => {
  return (
    <form className={s.popup}>
      <div className={s.popupContainer}>
        <div className={s.title}>
          <h2>Задать дату и время</h2>
        </div>
        <div className={s.divider}></div>

        <div className={s.inputs}>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Дата</p>
            </div>
            <input type="text" placeholder="дд.мм.гггг" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Время</p>
            </div>
            <input type="text" placeholder="00:00" />
          </div>
        </div>

        <div className={s.btns}>
          <div className={`${s.button} ${s.buttonPrimary} ${s.saveBtn}`}>
            <p>Сохранить</p>
          </div>
          <div
            className={`${s.button} ${s.buttonPrimary} ${s.cancelBtn}`}
            onClick={() => {
              setPopup(false);
            }}
          >
            <p>Отмена</p>
          </div>
        </div>
      </div>
    </form>
  );
};
