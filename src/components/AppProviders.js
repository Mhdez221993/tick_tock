import { DiscardModalProvider } from "context/discardModalContext";
import { UserProvider } from "context/userContext";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function AppProviders({ children }) {
  return (
    <React.StrictMode>
      <DiscardModalProvider>
        <UserProvider>
          {children}
          <Toaster />
        </UserProvider>
      </DiscardModalProvider>
    </React.StrictMode>
  );
}
