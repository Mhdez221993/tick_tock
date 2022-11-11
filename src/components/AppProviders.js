import React from "react";
import { Toaster } from "react-hot-toast";

export default function AppProviders({ children }) {
  return (
    <React.StrictMode>
      {children}
      <Toaster />
    </React.StrictMode>
  );
}
