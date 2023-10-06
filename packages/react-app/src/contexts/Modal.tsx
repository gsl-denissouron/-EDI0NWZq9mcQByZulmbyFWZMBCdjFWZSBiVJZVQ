import { ReactNode, createContext, useState } from "react";
import { createPortal } from "react-dom";

import { Modal } from "@react-app/components/common/Modal";
import { UIBackdrop } from "@react-app/components/ui/UIBackdrop";
import { UIModal } from "@react-app/components/ui/UIModal";

interface ModalHandler {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}
export const ModalContext = createContext<ModalHandler>(
  null as unknown as ModalHandler
);

export function ModalContextProvider({ children }: { children?: ReactNode }) {
  const [modal, setModal] = useState<ReactNode>("none");

  return (
    <ModalContext.Provider
      value={{
        openModal: (content) => {
          setModal(content);
        },
        closeModal: () => {
          setModal("none");
        },
      }}
    >
      {children}
      {modal !== "none" &&
        createPortal(
          <Modal
            as={UIModal}
            backdrop={UIBackdrop}
            onClose={() => {
              setModal("none");
            }}
          >
            {modal}
          </Modal>,
          document.body
        )}
    </ModalContext.Provider>
  );
}
