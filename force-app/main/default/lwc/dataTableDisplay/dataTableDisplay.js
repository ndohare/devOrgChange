import { LightningElement,track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController1.getAccounts';
export default class DataTableDisplay extends LightningElement {
    @track data;
    @track columns = [
        {lable: 'Name', fieldName: 'Name', type: 'text'},
        {lable: 'Phone', fieldName: 'Phone', type: 'phone'},
        {lable: 'Industry', fieldName: 'Industry', type: 'text'},
    ];
   @wire (getAccounts) accountRecords({error,data}){
      
       if(data){
           this.data = data;
       }
       else if(error){
           this.error = undefined;
       }
   }
}