import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://demotivation.ru/wp-content/uploads/2020/11/30a8cefac6e2538341e57aecf419ee08.jpg" />
      {props.message}
      <div>
        <span>like: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
