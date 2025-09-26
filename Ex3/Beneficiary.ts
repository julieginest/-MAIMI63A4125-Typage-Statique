import { Person } from "./Person";

enum LinkWithHolder{
    partner,
    child,
    linkedCompany
}

export class Beneficiary extends Person{
    private linkWithHolder: LinkWithHolder;

    /****** linkWithHolder ******/
    /**
     * Returns the Beneficiary's link with the holder of the Contract
     * @returns {LinkWithHolder} Current Beneficiary's link with the holder of the Contract
     */
    public getLinkWithHolder():LinkWithHolder {return this.linkWithHolder}
    /**
     * Changes the Beneficiary's link with the holder of the Contract
     * @param {LinkWithHolder} linkWithHolder New link with the holder of the Contract
     */
    public setLinkWithHolder(linkWithHolder: LinkWithHolder):void {this.linkWithHolder = linkWithHolder}
    /******************/
}