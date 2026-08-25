"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  value: string;
  toastText: string;
  ariaLabel: string;
  className?: string;
  fallbackHref?: string;
  children: React.ReactNode;
};

export default function CopyContact({
  value,
  toastText,
  ariaLabel,
  className,
  fallbackHref,
  children,
}: Props) {
  const [show, setShow] = useState(false);

  const handleClick = async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setShow(true);
      window.setTimeout(() => setShow(false), 1800);
    } catch {
      if (fallbackHref) {
        window.location.href = fallbackHref;
      } else {
        setShow(true);
        window.setTimeout(() => setShow(false), 1800);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        data-cursor="hover"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </button>
      {show && typeof document !== "undefined"
        ? createPortal(
            <div
              className="toast toast--contact"
              data-show="true"
              role="status"
              aria-live="polite"
            >
              {toastText} · {value}
            </div>,
            document.body
          )
        : null}
    </>
  );
}
