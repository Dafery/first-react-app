import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://phonoteka.org/uploads/posts/2021-05/1622036660_6-phonoteka_org-p-vodopad-art-krasivo-8.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
