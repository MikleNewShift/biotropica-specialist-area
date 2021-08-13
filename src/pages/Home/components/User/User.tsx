import React from "react";

import s from "./User.module.scss";

export interface IUser {
  name: string;
}

interface Props {
  user: IUser;
}

export const User = ({ user }: Props) => {
  return (
    <div className={s.user}>
      <div className={s.name}>
        <p>{user.name}</p>
      </div>
      <div className={s.link}>
        <a>перейти в профиль</a>
      </div>
    </div>
  );
};
