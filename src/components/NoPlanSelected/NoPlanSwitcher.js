import NoPlanSelected from "./UserNotLoggedIn";
import UserLoggedIn from "./UserLoggedIn";
import React from "react";

export default function NoPlanSwitcher({ setIsUserLoggedIn, isUserLoggedIn }) {
  let content = false;
  if (isUserLoggedIn === false) {
    content = <NoPlanSelected setIsUserLoggedIn={setIsUserLoggedIn} />;
  } else if (isUserLoggedIn === true) {
    content = <UserLoggedIn setIsUserLoggedIn={setIsUserLoggedIn} />;
  }

  return <>{content}</>;
}
