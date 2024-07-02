import { ModalEnum } from "@/constants/enums";

interface IModal {
  name: ModalEnum;
  isOpen: boolean;
}

interface ModalSlice {
  test: IModal;
}

interface IModalCompProps<T = any> {
  visible: boolean;
  closeModal: () => void;
  onUpdate?: () => void;
  val?: T;
  onSubmitData?: (data: T) => void;
}
interface IModalDetailsProps<T = any> {
  visible: boolean;
  closeModal: () => void;
  val: T;
}

interface IDeleteModalProps extends IModalCompProps {
  title: string;
  onDelete: () => void;
  loading?: boolean;
}
