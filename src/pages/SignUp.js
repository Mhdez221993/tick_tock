import db from "lib/firebase";
import { removeWhiteSpace } from "lib/validate";
import { useEffect, useState } from "react";

export default function SignUp({ user }) {
  const [isTaken, setTaken] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      console.log("user authenticated", user);
      const defaultUsername = removeWhiteSpace(user.displayName);
      setUsername(defaultUsername);
    }
  }, [user])

  useEffect(() => {
    const u = removeWhiteSpace(username);

    async function checkUsername() {
      if (u.length >= 3 && u.length <= 20) {
        const ref = db.doc(`usernames/@${u}`);
        const { exists } = await ref.get();
        setTaken(exists);
      }
    }

    if (u) {
      checkUsername();
    }

  }, [username])

  return (
    <div className="signup-container">
      <header className="signup-header">
        <signup-header-title>Sign up</signup-header-title>
      </header>
      <form action="" className="signup-form">
        <div className="signup-inner">
          <div className="signup-form-title">Create username</div>
          <div className={`signup-input ${!isTaken ? "signup-error" : ""}`}>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="Username" />

            <div className="signup-error-icon"></div>
          </div>
          <div className="signup-error-text">{isTaken ? "This username is taken." : "You can always change this latter."}</div>
        </div>
        <button className="signup-submit" disabled={isTaken}>Sign up</button>
      </form>
    </div>
  );
}
