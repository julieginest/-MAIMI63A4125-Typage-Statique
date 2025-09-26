import { Company } from "./Company";

export class Reinsurance{
    private id: string;
    private partnerCompany: Company;
    private validity: [Date, Date];
    private coveredPercentage: number;

    constructor(id: string, partnerCompany: Company, validity: [Date, Date], coveredPercentage: number){
        this.id = id;
        this.partnerCompany = partnerCompany;
        this.validity = validity;
        this.coveredPercentage = coveredPercentage;
    }


    /**
     * Returns the Reinsurance's id
     * @returns {string} Reinsurance's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly


    /****** partnerCompany ******/
    /**
     * Returns the Reinsurance's partner company
     * @returns {Company} Current Reinsurance's partner company
     */
    public getPartnerCompany():Company {return this.partnerCompany}
    /**
     * Changes the Reinsurance's partner company
     * @param {Company} partnerCompany New partner company
     */
    public setPartnerCompany(partnerCompany: Company):void {this.partnerCompany = partnerCompany}
    /******************/


    /****** validity ******/
    /**
     * Returns the Reinsurance's validity
     * @returns {[Date, Date]} Current Reinsurance's validity
     */
    public getValidity():[Date, Date] {return this.validity}
    /**
     * Changes the Reinsurance's validity
     * @param {[Date, Date]} validity New validity
     */
    public setValidity(validity: [Date, Date]):void {this.validity = validity}
    /******************/


    /****** coveredPercentage ******/
    /**
     * Returns the Reinsurance's covered percentage
     * @returns {number} Current Reinsurance's covered percentage
     */
    public getCoveredPercentage():number {return this.coveredPercentage}
    /**
     * Changes the Reinsurance's covered percentage
     * @param {number} coveredPercentage New covered percentage
     */
    public setCoveredPercentage(coveredPercentage: number):void {this.coveredPercentage = coveredPercentage}
    /******************/
}