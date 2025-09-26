import { Expert } from "../Expert/abstract";

export enum AccidentType{
    fire = "FR",
    theft = "THF",
    waterDamage = "WD",
    roadAccident = "ROA"
}
export abstract class Accident<T extends Expert>{
    private id: string
    private date: Date;
    protected type: AccidentType;
    private description?: string;
    private expert?: T

    constructor(
        id: number,
        date: Date,
        type: AccidentType,
        description?: string,
        expert?: T,
    ){
        this.id = type + String(id);
        this.date = date;
        this.type = type;
        this.description = description
        this.expert = expert
    }

    /**
     * Returns the Person's id
     * @returns {string} Person's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly


   /****** date ******/
    /**
     * Returns the date of the Accident
     * @returns {Date} Date of the Accident
     */
    public getDate():Date {return this.date}
    /**
      * Changes the date of the Accident
      * @param {Date} date New date of the Accident
      */
    public setDate(date: Date):void {this.date = date}
    /*******************/


   /****** type ******/
    /**
     * Returns the type of the Accident
     * @returns {AccidentType} Type of the Accident
     */
    public getType():AccidentType {return this.type}
    // No setType, it is readOnly
    /*******************/


   /****** description ******/
    /**
     * Returns the description of the Accident
     * @returns {Date} Description of the Accident
     */
    public getDescription():string {return this.description ?? ""}
    /**
      * Changes the description of the Accident
      * @param {Date} description New description of the Accident
      */
    public setDescription(description: string):void {this.description = description}
    /*******************/


   /****** description ******/
    /**
     * Returns the Expert in charge of the Accident
     * @returns {T | undefined} Expert in charge of the Accident
     */
    public getExpert():T | undefined {return this.expert}
    /**
      * Changes the Expert in charge of the Accident
      * @param {T | undefined} expert New Expert in charge of the Accident
      */
    public setExpert(expert: T):void {this.expert = expert}
    /**
      * Remove the Expert in charge of the Accident
      */
    public removeExpert():void {this.expert = undefined}
    /*******************/
}