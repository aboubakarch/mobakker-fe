import { ModalEnum } from "@/constants/enums";

interface IModal {
  name: ModalEnum;
  isOpen: boolean;
}

interface ModalSlice {
  test: IModal;
}

interface IModalCompProps {
  visible: boolean;
  closeModal: () => void;
}
