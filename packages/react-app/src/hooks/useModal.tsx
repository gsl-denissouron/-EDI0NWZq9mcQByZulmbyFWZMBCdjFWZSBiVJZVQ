import { useContext } from "react";

import { ModalContext } from "@react-app/contexts/Modal";

export const useModal = () => useContext(ModalContext);
