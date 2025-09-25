import {
    UserBase,UserExtended,
    Course,
    PaimentDummy, Card,Paiment,
    Item, Currency, Facture,
    Tier, Benefit, Account,
    Passenger, Stop, Trip
} from "./Ex2"



const testValue : Paiment = {
    id:1,
    courseId:52,
    amount: 8,
    method: "card",
    lastDigits:4529,
    status:"paid"
}