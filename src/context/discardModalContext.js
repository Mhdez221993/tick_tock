import { createContext, useContext, useState } from "react";

const DiscardModalContext = createContext();

export function DiscardModalProvider({ children }) {
  const [isDiscardOpen, setDiscardOpen] = useState(false);
  const closeDiscard = () => setDiscardOpen(false);
  const openDiscard = () => setDiscardOpen(true);

  return (
    <DiscardModalContext.Provider value={{ isDiscardOpen, closeDiscard, openDiscard }}>
      { children }
    </DiscardModalContext.Provider>
  );
}

export default function useDiscardModal() {
  const context = useContext(DiscardModalContext);

  if (context === undefined) {
    throw new Error("useDiscardModal must be used with DiscardModalContext.Provider")
  }

  return context;
}
