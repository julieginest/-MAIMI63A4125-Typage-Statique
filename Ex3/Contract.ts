import { Beneficiary } from "./Beneficiary";
import {Option} from "./Option"
enum ContractStatus{
    active,
    terminated
}

enum PriceModificationType {
    discount,
    bonus
}

type PriceModification = {
    type:PriceModificationType,
    amount: number

}

export class Contract{
    private id: string;
    private status: ContractStatus;
    private basePrime:number;
    public priceModifications :PriceModification[];
    public optionsList: Option[];
    public beneficiariesList: Beneficiary[];

    constructor(id:string, status: ContractStatus, basePrime:number, priceModifications?:PriceModification[], optionsList?: Option[], beneficiariesList?: Beneficiary[]){
        this.id = id;
        this.status = status;
        this.basePrime = basePrime
        this.priceModifications = priceModifications ?? []
        this.optionsList = optionsList ?? []
        this.beneficiariesList = beneficiariesList ?? []
    }

    /**
     * Returns the Contract's id
     * @returns {string} Contract's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly
    

    /**
     * getStatus
     */
    public getStatus():ContractStatus {return this.status}    
    /**
     * setStatus
     */
    public setStatus(status : ContractStatus):void {this.status = status}
    
    
    
    /**
     * getBasePrime
     */
    public getBasePrime():number {return this.basePrime}
    /**
     * setBasePrime
     */
    public setBasePrime(basePrime:number):void {this.basePrime = basePrime}




}