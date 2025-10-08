export interface ProductSelection {
    mainProductId: string;
    productId: string;
    quantity: number;
  }
  
  export interface CustomPacketState {
    selections: ProductSelection[];
  }