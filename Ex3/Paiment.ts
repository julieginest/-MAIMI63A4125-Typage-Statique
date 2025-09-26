export enum PaimentStatus{
    pending,
    paid,
    failed
}
export enum PaimentMethod{
    card,
    transfer,
    cash
}
export class Paiment{
    private id: string;
    private contractId: string;
    private amount: number;
    private date: Date;
    private method: PaimentMethod;
    private status: PaimentStatus;

    constructor(id: string, contractId: string, amount: number, date: Date, method: PaimentMethod, status: PaimentStatus){
        this.id = id;
        this.contractId = contractId;
        this.amount = amount;
        this.date = date;
        this.method = method;
        this.status = status
    }

    /**
     * Returns the Paiment's id
     * @returns {string} Paiment's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly


    /**
     * Returns the Contract's id
     * @returns {string} Contract's id
     */
    public getContractId():string {return this.contractId}
    // No setContractId, it is readOnly


    /**
     * Returns the amount
     * @returns {number} Amount
     */
    public getAmount():number {return this.amount}
    // No setAmount, it is readOnly
    
    
    /****** date ******/
    /**
     * Returns the Paiment's date
     * @returns {Date} Date
     */
    public getDate():Date {return this.date}
    /**
     * Changes the Paiment's date
     * @param {Date} date New date
     */
    public setDate(date: Date):void {this.date = date}
    /******************/
    
    
    /****** method ******/
    /**
     * Returns the Paiment's method
     * @returns {PaimentMethod} Paiment's method
     */
    public getMethod():PaimentMethod {return this.method}
    /**
     * Changes the Paiment's method
     * @param {PaimentMethod} method New method
     */
    public setMethod(method: PaimentMethod):void {this.method = method}
    /******************/
    
    
    /****** status ******/
    /**
     * Returns the Paiment's status
     * @returns {PaimentStatus} Paiment's status
     */
    public getStatus():PaimentStatus {return this.status}
    /**
     * Changes the Paiment's status
     * @param {PaimentMethod} status New status
     */
    public setStatus(status: PaimentStatus):void {this.status = status}
    /******************/
}