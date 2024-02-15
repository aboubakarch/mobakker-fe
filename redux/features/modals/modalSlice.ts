import { ModalEnum } from "@/constants/enums";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modal {
  name: ModalEnum;
  isOpen: boolean;
}

type Payload = Modal;

interface ModalSlice {
  test: Modal;
}

const initialState: ModalSlice = {
  test: { name: ModalEnum.Test, isOpen: false },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<Payload>) {
      Object.keys(state).forEach((modalName: string) => {
        const modName = modalName as ModalEnum;
        state[modName] = { ...initialState[modName] };
      });

      state[action.payload.name] = {
        ...state[action.payload.name],
        ...action.payload,
        isOpen: true,
      };
      state[action.payload.name].isOpen = true;
    },
    closeModal(state, action: PayloadAction<ModalEnum>) {
      // Assuming action.payload is the modal name
      const modal = action.payload;
      state[modal] = { ...initialState[modal] };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
