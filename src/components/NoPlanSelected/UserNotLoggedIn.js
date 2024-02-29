import "../ButtonsAndInput/Button.js";
import Button from "../ButtonsAndInput/Button.js";
import "../../styles/NoPlanSelected.scss";
import { auth, googleProvider } from "../../config/firebase.js";
import { signInWithPopup } from "firebase/auth";

export default function UserNotLoggedIn({ setIsUserLoggedIn }) {
  const signInWithGoogle = async () => {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    try {
      await signInWithPopup(auth, googleProvider);
      setIsUserLoggedIn(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Log in with Google to track your progress!</h2>
      <Button btnLabel="Sign in with Google" onClick={signInWithGoogle} />
    </div>
  );
}
