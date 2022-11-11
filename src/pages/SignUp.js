import db from "lib/firebase";
import { removeWhiteSpace } from "lib/validate";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const toastOptions = {
  position: 'top-right',
  style: {
    fontFamily: 'proxima-regular',
    borderRadius: 10,
    background: '#333',
    color: "#fff"
  }
}

export default function SignUp({ user }) {
  const [isTaken, setTaken] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(false);

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

  async function signUp(e) {
    e.preventDefault();

    if (isTaken) {
      return toast.error("This username is taken", toastOptions);

    } else if (username.length < 3) {
      return toast.error("Username is under 3 character limit", toastOptions);

    } else if (username.length > 20) {
      return toast.error("Username is over 20 character limit", toastOptions);

    }

    const { uid, displayName, photoURL } = user;
    const u = `@${removeWhiteSpace(username)}`;

    try {
      setLoading(true);
      await db.doc(`users/${uid}`).set({
        uid,
        username: u,
        displayName,
        photoURL
      })

    } catch (error) {
      alert(error);

    } finally {
      setLoading(false);
    }


  }

  return (
    <div className="signup-container">
      <header className="signup-header">
        <signup-header-title>Sign up</signup-header-title>
      </header>
      <form onSubmit={signUp} className="signup-form">

        <div className="signup-inner">
          <div className="signup-form-title">Create username</div>
          <div className={`signup-input ${!isTaken ? "signup-error" : ""}`}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />

            <div className="signup-error-icon"></div>
          </div>
          <div className="signup-error-text">{isTaken ? "This username is taken." : "You can always change this latter."}</div>
        </div>

        <button
          type="submit"
          className="signup-submit"
          disabled={isTaken | isLoading}

        >Sign up</button>
      </form>
    </div>
  );
}
