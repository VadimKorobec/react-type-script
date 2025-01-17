import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

interface ModalProps {
  onToggleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, onToggleModal }: ModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <>
      <div onClick={onToggleModal} className={styles.backdrop}>
        <div onClick={handleModalClick} className={styles.modal}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
