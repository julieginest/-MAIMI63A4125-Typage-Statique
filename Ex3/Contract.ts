import { Beneficiary } from "./Beneficiary";
import {Option} from "./Option"
import { Paiment } from "./Paiment";
import { ReimbursementRepartition } from "./Reimbursement";
import { Reinsurance } from "./Reinsurance";
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
    public reinsuranceList: Reinsurance[];
    public paimentsList: Paiment[];

    constructor(id:string, status: ContractStatus, basePrime:number, priceModifications?:PriceModification[], optionsList?: Option[], beneficiariesList?: Beneficiary[], reinsuranceList?: Reinsurance[]){
        this.id = id;
        this.status = status;
        this.basePrime = basePrime
        this.priceModifications = priceModifications ?? []
        this.optionsList = optionsList ?? []
        this.beneficiariesList = beneficiariesList ?? []
        this.reinsuranceList = reinsuranceList ?? []
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

    
    /**
     * calculateReimbursment
     */
    public calculateReimbursment(amount: number): ReimbursementRepartition[] {
        var repartition: ReimbursementRepartition[] = []
        var remainningAmout: number = amount

        this.reinsuranceList.forEach(element => {
            const existing = repartition.find(rr => rr.companyId === element.getPartnerCompany().getId());
            
            if (existing) {
                existing.amount += (amount / 100) * element.getCoveredPercentage()
            } else {
                repartition.push({
                    companyId: element.getPartnerCompany().getId(),
                    amount: (amount / 100) * element.getCoveredPercentage()
                })
            }
            remainningAmout -= (amount / 100) * element.getCoveredPercentage()
        });
        
        repartition.push({
            companyId: "THIS",
            amount: remainningAmout
        })


        return repartition;
    }
}