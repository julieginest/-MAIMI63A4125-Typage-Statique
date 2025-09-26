export class Option{
    private name: string;
    private description: string;
    private additionalCost: number;

    constructor(name: string, description: string, additionalCost: number){
        this.name = name;
        this.description = description;
        this.additionalCost = additionalCost;
    }

    
    /****** name ******/
    /**
     * Returns the Option's name
     * @returns {string} Current Option's name
     */
    public getName():string {return this.name}
    /**
     * Changes the Option's name
     * @param {string} name New name
     */
    public setName(name: string):void {this.name = name}
    /******************/

    
    /****** description ******/
    /**
     * Returns the Option's description
     * @returns {string} Current Option's description
    */
   public getDescription():string {return this.description}
    /**
     * Changes the Option's description
     * @param {string} description New description
     */
    public setDescription(description: string):void {this.description = description}
    /******************/

    
    /****** additionalCost ******/
    /**
     * Returns the Option's additional cost
     * @returns {number} Current Option's additional cost
     */
    public getAdditionalCost():number {return this.additionalCost}
    /**
     * Changes the Option's additional cost
     * @param {number} additionalCost New additional cost
     */
    public setAdditionalCost(additionalCost: number):void {this.additionalCost = additionalCost}
    /******************/
}