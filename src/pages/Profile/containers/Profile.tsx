import React from "react";

import { Card } from "../components/Card/Card";
import { Post } from "../components/Post/Post";

import s from "./Profile.module.scss";

interface Props {}

export const Profile = (props: Props) => {
  return (
    <div className={s.profile}>
      <div className={s.info}>
        <Card />
      </div>
      <div className={s.courses}>
        <div className={s.title}>
          <h3>Курсы повышения квалификации</h3>
          <div className={s.postList}>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};
