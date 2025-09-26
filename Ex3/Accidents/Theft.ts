import { Accident, AccidentType } from "./abstract"
import { TheftExpert } from "../Expert/TheftExpert"

export class Theft extends Accident<TheftExpert>{

    private complaintId: string;

    constructor(
        id: number,
        date: Date,
        type: AccidentType,
        complaintId: string,
        description?: string,
        expert?: TheftExpert,
    ){
        super(id, date, type, description, expert)
        this.complaintId = complaintId
    }


   /****** complaintId ******/
    /**
     * Returns the complaint's id of the Accident
     * @returns {string | undefined} Complaint's id of the Accident
     */
    public getComplaintId():string | undefined {return this.complaintId}
    /**
      * Changes the complaint's id  of the Accident
      * @param {string | undefined} complaintId New complaint's id  of the Accident
      */
    public setComplaintId(complaintId: string):void {this.complaintId = complaintId}
    /*******************/
}