import { auth } from "lib/firebase";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [useAuthUser] = useAuthState(auth);

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
}

export default function useAuthUser() {}
