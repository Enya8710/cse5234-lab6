export interface Shipping {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    shipping_method: string;

}

export const shipping: Shipping = {
    id: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    shipping_method: "",

}

