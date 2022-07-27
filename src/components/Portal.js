import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Portal({ children, className }) {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const parent = document.body;
    parent.appendChild(el);

    return () => {
      parent.removeChild(el);
    };
  }, [el, className]);

  return ReactDOM.createPortal(children, el);
}
