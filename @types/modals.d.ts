import { ModalEnum } from "@/constants/enums";

interface IModal {
  name: ModalEnum;
  isOpen: boolean;
}

type ModalPayload = IModal;

interface ModalSlice {
  test: IModal;
}
