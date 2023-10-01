import React from "react";
import "./sidebar-content.scss";
import UserComponent from "../UserComponent";
import { useSelector } from "react-redux";
import { UserState } from "../../store";
import { User } from "../../models";

interface Props {
  users?: User[];
}

function UsersList({ users }: Props) {
  const usersOnline = useSelector(
    (state: UserState) => state.users.usersOnline
  );
  return (
    <div className="content">
      {users && (
        <>
          {users.map((user, index) => (
            <div key={`user_${index}`}>
              <UserComponent user={user} />
              {index != usersOnline.length - 1 && <hr />}
            </div>
          ))}
        </>
      )}
      {!users && (
        <>
          {usersOnline.map((user, index) => (
            <div key={`user_${index}`}>
              <UserComponent user={user} />
              {index != usersOnline.length - 1 && <hr />}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default UsersList;
