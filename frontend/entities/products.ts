
export interface IProducts {
    [ProductType.MENSTRUAL]: IProduct[];
    [ProductType.SUPPORTIVE]: IProduct[];
}

export enum ProductType {
    MENSTRUAL = "menstrual",
    SUPPORTIVE = "supportive",
}

export enum ProductSubProductType {
    PAD = "pad",
    PANTY_LINER = "panty_liner",
    TAMPON = "tampon",
    CYCLE_ESSENTIALS = "cycle_essentials",
    CRANBERRY_ESSENTIALS = "cranberry_essentials",
}

export interface IProduct {
    key: string;
    title: string;
    description: string | null;
    main_product_id: string;
    icon: string;
    sub_products: IProductSubProduct[];
}

export interface IProductSubProduct {
    product: string;
    product_id: string;
    iconSr: string;
    backgroundColor: string;
    maxQuantity: number;
    quantityIncrement: number;
    price: number;
}


