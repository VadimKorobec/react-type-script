import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { MouseEvent, useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeModal(false));
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [dispatch]);

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    <>
      <div
        className={styles.backdrop}
        onClick={() => dispatch(closeModal(false))}
      >
        <div onClick={handleModalClick} className={styles.modal}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
