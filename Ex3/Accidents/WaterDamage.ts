import { Accident, AccidentType } from "./abstract"
import { WaterDamageExpert } from "../Expert/WaterDamageExpert"

export class WaterDamage extends Accident<WaterDamageExpert>{

    private declaredNaturalCatastrophy: boolean;

    constructor(
        id: number,
        date: Date,
        type: AccidentType,
        declaredNaturalCatastrophy: boolean,
        description?: string,
        expert?: WaterDamageExpert,
    ){
        super(id, date, type, description, expert)
        this.declaredNaturalCatastrophy = declaredNaturalCatastrophy;
    }


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