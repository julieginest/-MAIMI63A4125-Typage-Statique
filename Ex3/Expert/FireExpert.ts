import { AccidentType } from "../Accidents/abstract";
import { Expert } from "./abstract";

export class FireExpert extends Expert{
    constructor(id: string, firstName: string, lastName: string, email: string, phoneNo: string){
        super(id, firstName, lastName, email, phoneNo)
        this.expertise = [AccidentType.fire]
    }
}