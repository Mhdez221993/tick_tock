import { createContext } from "react";

const DiscardModalContext = createContext();

export function DiscardModalProvider({ children }) {

  return (
    <DiscardModalContext.Provider>
      { children }
    </DiscardModalContext.Provider>
  );
}

export default function useDiscardModal() {}
