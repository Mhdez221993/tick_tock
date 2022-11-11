import LogIn from "pages/LogIn";
import SignUp from "pages/SignUp";
import { useState } from "react";

export default function UnAuthApp() {
  const [isNewUser, setNewUser] = useState(false);
  const [user, setUser] = useState(null);

  return isNewUser ? <SignUp user={user} /> : <LogIn setUser={setUser} setNewUser={setNewUser} />;
}
