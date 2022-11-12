import { UserProvider } from "context/userContext";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function AppProviders({ children }) {
  return (
    <React.StrictMode>
      <UserProvider>
        {children}
        <Toaster />
      </UserProvider>
    </React.StrictMode>
  );
}
