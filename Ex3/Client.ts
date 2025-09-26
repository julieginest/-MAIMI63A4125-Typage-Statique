import { Contract } from "./Contract";
import { Person } from "./Person";

export class Client extends Person{
    private isVIP: boolean
    private contractList: Contract[]
    //status:?; -> incomming?

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNo: string, isVIP: boolean, contractList?: Contract[]){
        super(id, firstName, lastName, email, phoneNo)
        this.isVIP = isVIP;
        this.contractList = contractList ?? [];
    }


   /****** isVIP ******/
    /**
     * Returns the VIP status
     * @returns {boolean} Current Client's VIP status
     */
   public getIsVIP():boolean {return this.isVIP}
   /**
     * Changes the VIP status
     * @param {boolean} isVIP New VIP status 
     */
   public setIsVIP(isVIP: boolean):void {this.isVIP = isVIP}
   /*******************/


   /****** contractList ******/
    /**
     * Returns the contract list
     * @returns {Contract[]} List of Client's Contract
     */
    public getContractList():Contract[] {return this.contractList}
    /**
     * Add a contract to the list
     * @param {Contract} contract Contract to add
     */
    public addContract(contract: Contract):void {this.contractList.push(contract)}
    /**
     * Removes the contract with the asked id
     * @param {number} id id of the contract to remove
     * @returns {boolean} Returns true if contract was removed, false if it didn't exist in the object
     */
    public removeContractById(id: string):boolean {
        var isChanged : boolean = false;

        const newContractList = this.contractList.filter(c => c.getId() !== id);
        isChanged = newContractList !== this.contractList

        this.contractList = newContractList;

        return isChanged;
    }
   /**************************/

   

}
