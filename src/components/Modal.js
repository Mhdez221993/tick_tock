import { useEffect, useRef, useState } from "react";
import Portal from "./Portal";

export default function Modal({ open, onClose, children }) {
  const [active, setActive] = useState(false);
  const backdrop = useRef(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e) => [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = (e) => e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal>
          <div
            ref={backdrop}
            className={active && open ? "active backdrop" : "backdrop"}
          >
            <div className="content modal-content">{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
}
