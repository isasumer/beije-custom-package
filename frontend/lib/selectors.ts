import { RootState } from './store';
const selectSelections = (state: RootState) => state.customPacketSlice.selections;
const getProductSelection = (state: RootState, mainProductId: string, productId: string) => {
    return state.customPacketSlice.selections.find(selection => selection.mainProductId === mainProductId && selection.productId === productId);
};

export { getProductSelection, selectSelections };