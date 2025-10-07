import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomPacketState, ProductSelection } from './entities';



const initialState: CustomPacketState = {
  selections: [],
};

const customPacketSlice = createSlice({
  name: 'customPacket',
  initialState,
  reducers: {
    addProductSelection: (state, action: PayloadAction<ProductSelection>) => {
      const existingProduct = state.selections.find(
        (selection) =>
          selection.mainProductId === action.payload.mainProductId &&
          selection.productId === action.payload.productId
      );
      if (existingProduct) {
        existingProduct.quantity = action.payload.quantity;
      } else {
        state.selections.push(action.payload);
      }
    },
    removeProductSelection: (state, action: PayloadAction<{ mainProductId: string; productId: string }>) => {
      state.selections = state.selections.filter(
        (selection) =>
          !(selection.mainProductId === action.payload.mainProductId &&
            selection.productId === action.payload.productId)
      );
    },
  },
});

export const { addProductSelection, removeProductSelection } = customPacketSlice.actions;
export default customPacketSlice.reducer;
