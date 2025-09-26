export class Company{
    private id: string;

    constructor(id: string){
        this.id = id
    }

    /**
     * Returns the Reinsurance's id
     * @returns {string} Reinsurance's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly
} // todo