import React from "react";
import "./tag-popup.scss";
import UsersList from "../UsersList";
import { useSelector } from "react-redux";
import { UserState } from "../../store";
import ShareButton from "../ShareButton";
import {
  CameraOutlined,
  PictureOutlined,
  GifOutlined,
} from "@ant-design/icons";

interface Props {
  userNameString?: string;
  title: string;
}

function Popup({ userNameString, title }: Props) {
  const usersOnline = useSelector(
    (state: UserState) => state.users.usersOnline
  );
  return (
    <div className={userNameString ? "tag-popup" : "media-popup"}>
      <h5>{title}</h5>
      {userNameString && (
        <UsersList
          users={usersOnline.filter((user) =>
            user.name
              .toLowerCase()
              .includes(userNameString.substring(1).toLowerCase())
          )}
        />
      )}
      {!userNameString && (
        <>
          <ShareButton
            icon={<CameraOutlined />}
            title="Camera"
            onClick={() => {}}
          />
          <ShareButton
            icon={<PictureOutlined />}
            title="Gallery"
            onClick={() => {}}
          />
          <ShareButton icon={<GifOutlined />} title="Gif" onClick={() => {}} />
        </>
      )}
    </div>
  );
}

export default Popup;
