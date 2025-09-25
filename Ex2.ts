/////// PART 1 \\\\\\\
/////// USER \\\\\\\
export interface UserBase{
    id: number,
    name: string,
}
export interface UserExtended extends UserBase{
    email: string,
    phone: string,
    vip: boolean
}

/////// PART 2 \\\\\\\
/////// COURSE \\\\\\\
export interface Course {
    id: number,
    client: UserBase,
    driver: UserBase,
    startLocation: string,
    endLocation: string,
    distanceKm: number,
    price: number
}

/////// PART 3 \\\\\\\
/////// PAIMENT \\\\\\\
export interface PaimentDummy {
    id: number;
    courseId: number;
    amount: number;
    method: string;
    status: "paid" | "unpaid";
}

export interface Card {
    number: string;
    expiration: string;
}


export type Paiment =
| (PaimentDummy & { method: "card"; card: Card })
| (PaimentDummy & { method: "PayPal"; paypalId:  string})
| (PaimentDummy & { method: Exclude<string, "card" | "PayPal">; lastDigits: number });
  

/////// PART 4 \\\\\\\
/////// FACTURE \\\\\\\
export interface Item{
    label:string,
    amount: number
}

export enum Currency{
    EUR,
    USD
}

export interface Facture{
    id: number,
    paimentId: number,
    issuedAt: string,
    items: Item[],
    total: number,
    currency: Currency,
}

/////// PART 5 \\\\\\\
/////// ACCOUNT \\\\\\\
export enum Tier{
    standard,
    silver,
    gold,
    platinium
}
export interface Benefit{
    type: string,
    value: number
}
export interface Account{
    clientId: number
    tier: Tier,
    points: number,
    benefits: Benefit[],
    validUntil: string
}

/////// PART 6 \\\\\\\
/////// TRIP \\\\\\\

export interface Passenger extends UserBase{
    pickup:string
}

export interface Stop{
    location: string,
    eta: string
}

export interface Trip{
    id: number,
    driver: UserBase,
    passengers: Passenger[],
    route:{
        stops:Stop[]
    },
    farePerPassengers:number
    
}


/////// PART 7 \\\\\\\
/////// TICKET \\\\\\\
export interface Message{
    from: string,
    text: string,
    sentAt: string
}
export interface HelpMessage extends Message{
    from: "client" | "support",
}
export interface SupportMessage extends HelpMessage{
    from: "support",
    agent: UserBase
}


export interface TicketChat{
    id: number,
    clientId: number,
    category: string,
    message: (HelpMessage | SupportMessage)[],
    status: "open" | "closed",
}


/////// PART 8 \\\\\\\
/////// WALLET \\\\\\\
export enum TransactionType{
    topup,
    refund,
    payment
}

export interface Transaction{
    id: number,
    type: TransactionType,
    amount: number,
    date: string
}

export interface Wallet{
    balance: number,
    currency: Currency,
    transactions: Transaction[]
}

export interface UserInfo{
    clientId: number,
    wallet?:Wallet,
    history?: Log[]
}

/////// PART 9 \\\\\\\
/////// HISTORY \\\\\\\
enum LogEnum {
    support,
    ride
}
export type LogType = (
    |TransactionType
    |LogEnum
)

export type Log= {type : string} &(
    | Transaction
    | {
        type: "ride",
        courseId: number,
        amount: number,
        date: string
    }
    | {
        ticketId: number,
        resolved: boolean,
        date: string
      }
)