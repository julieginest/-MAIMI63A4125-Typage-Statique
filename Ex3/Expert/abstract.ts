import { AccidentType } from "../Accidents/abstract"
import { Person } from "../Person"

export abstract class Expert extends Person{
    protected expertise : AccidentType[]

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNo: string){
        super(id, firstName, lastName, email, phoneNo)
    }

    /****** expertise ******/
    /**
     * Returns the Expert's field of expertise
     * @returns {AccidentType} Expert's field of expertise
     */
    public getExpertise():AccidentType[] {return this.expertise}
    /******************/
}