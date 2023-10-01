import React from "react";
import "./tag-popup.scss";
import UsersList from "../UsersList";
import { useSelector } from "react-redux";
import { UserState } from "../../store";

interface Props {
  userNameString: string;
}

function TagPopup({ userNameString }: Props) {
  const usersOnline = useSelector(
    (state: UserState) => state.users.usersOnline
  );
  return (
    <div className="tag-popup">
      <h5>Online Users</h5>
      <UsersList
        users={usersOnline.filter((user) =>
          user.name
            .toLowerCase()
            .includes(userNameString.substring(1).toLowerCase())
        )}
      />
    </div>
  );
}

export default TagPopup;
