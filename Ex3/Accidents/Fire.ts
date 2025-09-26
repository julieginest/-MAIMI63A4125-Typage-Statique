import { Accident, AccidentType } from "./abstract"
import { FireExpert } from "../Expert/FireExpert"

export class Fire extends Accident<FireExpert>{

    private declaredNaturalCatastrophy: boolean;
    private complaintId?: string;

    constructor(
        id: number,
        date: Date,
        type: AccidentType,
        declaredNaturalCatastrophy: boolean,
        complaintId?: string,
        description?: string,
        expert?: FireExpert,
    ){
        super(id, date, type, description, expert)
        this.declaredNaturalCatastrophy = declaredNaturalCatastrophy;
        this.complaintId = complaintId;
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
    /**
      * Remove the complaint's id of the Accident
      */
    public removeComplaintId():void {this.complaintId = undefined}
    /*******************/


   /****** declaredNaturalCatastrophy ******/
    /**
     * Returns the complaint's id of the Accident
     * @returns {boolean} Complaint's id of the Accident
     */
    public getDeclaredNaturalCatastrophy():boolean{return this.declaredNaturalCatastrophy}
    /**
      * Changes the complaint's id  of the Accident
      * @param {boolean} declaredNaturalCatastrophy New complaint's id  of the Accident
      */
    public setDeclaredNaturalCatastrophy(declaredNaturalCatastrophy: boolean):void {this.declaredNaturalCatastrophy = declaredNaturalCatastrophy}
    /*******************/
}