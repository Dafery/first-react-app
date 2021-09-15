import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://phonoteka.org/uploads/posts/2021-05/1622036660_6-phonoteka_org-p-vodopad-art-krasivo-8.jpg"
        />
      </div>
      <div>ava + description</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
