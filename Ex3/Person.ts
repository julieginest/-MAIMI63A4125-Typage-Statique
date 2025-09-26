export abstract class Person{
    private id: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private phoneNo: string;

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNo: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo
    }

    /**
     * Returns the Person's id
     * @returns {string} Person's id
     */
    public getId():string {return this.id}
    // No setId, it is readOnly


    /****** firstName ******/
    /**
     * Returns the Person's first name
     * @returns {string} Current Person's first name
     */
    public getFirstName():string {return this.firstName}
    /**
     * Changes the first name
     * @param {string} firstName New first name
     */
    public setFirstName(firstName: string):void {this.firstName = firstName}
    /******************/


    /****** lastName ******/
    /**
     * Returns the Person's last name
     * @returns {string} Current Person's last name
     */
    public getLastName():string {return this.lastName}
    /**
     * Changes the last name
     * @param {string} lastName New last name
     */
    public setLastName(lastName: string):void {this.lastName = lastName}
    /******************/

    /****** email ******/
    /**
     * Returns the Person's email
     * @returns {string} Current Person's email
     */
   public getEmail():string {return this.email}
   /**
    * Changes the email
    * @param {string} email New email
    */
  public setEmail(email: string):void {this.email = email}
  /*******************/


  /****** phoneNo ******/
   /**
    * Returns the Person's phone number
    * @returns {string} Current Person's phone number
    */
  public getPhoneNo():string {return this.phoneNo}
   /**
    * Changes the phone number
    * @param {string} phoneNo New phone number
    */
  public setPhoneNo(phoneNo: string):void {this.phoneNo = phoneNo}
  /*********************/
}