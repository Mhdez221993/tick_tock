import db, { auth } from "lib/firebase";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [useAuthUser] = useAuthState(auth);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const ref = db.doc(`users/${authUser?.uid}`);

    ref.get().then(doc => {
      if (doc.exists) {
        setUser({
          id: doc.id,
          ref: doc.ref,
          ...doc.data()
        })
      }
    }).catch(error => console.error("Error fetching user", error))
    .finally(() => setLoading(false))

  }, [useAuthUser])

  return (
    <UserContext.Provider value={[user, isLoading]}>
      {children}
    </UserContext.Provider>
  );
}

export default function useAuthUser() {}
