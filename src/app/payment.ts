export interface Payment {
    id: number;
    creditCardNumber: string,
    expirationDate: string,
    cvvCode: string
}

export const payment: Payment = {
    id: 0,
    creditCardNumber: "",
    expirationDate: "",
    cvvCode: ""
}

