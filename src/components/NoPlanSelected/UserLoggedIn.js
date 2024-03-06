import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import "../../styles/UserLoggedIn.scss";
import Button from "../ButtonsAndInput/Button";
import React from "react";

export default function UserLoggedIn({ setIsUserLoggedIn }) {
  const usersEmail = auth?.currentUser?.email;
  const usersPhotoUrl = auth?.currentUser?.photoURL;
  const logout = async () => {
    try {
      await signOut(auth);
      setIsUserLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
      <h1>Welcome</h1>
      <h2>{usersEmail}</h2>
      <img src={usersPhotoUrl} alt="User"></img>
      <h2>Select existing plan or create a new one</h2>
      <Button btnLabel="Log out" onClick={logout} />
    </div>
  );
}
