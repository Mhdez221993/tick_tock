import db, { auth } from "lib/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [authUser] = useAuthState(auth);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const ref = db.doc(`users/${authUser?.uid}`);

    ref.get().then(doc => {
      if (doc.exists) {
        setUser({ id: doc.id, ref: doc.ref, ...doc.data() })
      }
    }).catch(error => console.error("Error fetching user", error))
    .finally(() => setLoading(false))

  }, [authUser])

  return (
    <UserContext.Provider value={[user, isLoading]}>
      {children}
    </UserContext.Provider>
  );
}

export default function useAuthUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useAuthUser mush be used with UserContext.Provider")
  }

  return context;
}
