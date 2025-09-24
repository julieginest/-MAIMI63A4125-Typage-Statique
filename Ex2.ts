interface user {
    id: number,
    name: string,
    email: string,
    phone: string,
    vip: boolean
}

interface Course {

}

interface PaimentDummy {
    id: number;
    courseId: number;
    amount: number;
    method: string;
    status: "paid" | "unpaid";
}

interface Card {
    // define card properties
    number: string;
    expiry: string;
}

interface PaypalAccount {
    // define PayPal account properties
    email: string;
}

type Paiment =
    | (PaimentDummy & { method: "card"; card: Card })
    | (PaimentDummy & { method: "PayPal"; account: PaypalAccount });

interface Item{
    label:string,
    amount: number
}

enum Currencies{
    EUR,
    USD
}

interface Facture{
    id: number
    paimentId: number
    issuedAt: string,
    items: Item[],
    total: number,
    currency: Currencies
}
