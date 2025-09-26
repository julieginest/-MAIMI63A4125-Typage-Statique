import { Company } from "./Company";
import { PaimentMethod } from "./Paiment";

export interface ReimbursementRepartition{
    companyId : string,
    amount: number,
}

export class Reimbursement{
    private id: string;
    private accidentId: string;
    private amount: number;
    private date: Date;
    private method: PaimentMethod;


    /**
     * Returns the Reimbursement's id
     * @returns {string} Reimbursement's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly
    

    /****** accidentId ******/
    /**
     * Returns the Reimbursement's accident id
     * @returns {string} Current Reimbursement's accident id
     */
    public getAccidentId():string {return this.accidentId}
    /**
     * Changes the accident id
     * @param {string} accidentId New accident id
     */
    public setAccidentId(accidentId: string):void {this.accidentId = accidentId}
    /******************/


    /****** amount ******/
    /**
     * Returns the Reimbursement's amount
     * @returns {number} Current Reimbursement's amount
     */
    public getAmount():number {return this.amount}
    /**
     * Changes the Reimbursement's amount
     * @param {number} amount New amount
     */
    public setAmount(amount: number):void {this.amount = amount}
    /******************/


    /****** date ******/
    /**
     * Returns the Reimbursement's date
     * @returns {Date} Current Reimbursement's date
     */
    public getDate():Date {return this.date}
    /**
     * Changes the Reimbursement's date
     * @param {Date} date New date
     */
    public setDate(date: Date):void {this.date = date}
    /******************/


    /****** method ******/
    /**
     * Returns the Reimbursement's method
     * @returns {PaimentMethod} Current Reimbursement's method
     */
    public getMethod():PaimentMethod {return this.method}
    /**
     * Changes the Reimbursement's method
     * @param {PaimentMethod} method New method
     */
    public setMethod(method: PaimentMethod):void {this.method = method}
    /******************/
}