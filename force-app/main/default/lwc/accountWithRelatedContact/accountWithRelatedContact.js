import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountWithRelatedContactController.getAccountWithRelatedContact';

const column = [
    {label:'Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone', type:'phone'},
    {label:'Account Number', fieldName: 'AccountNumber'}
];

export default class AccountWithRelatedContact extends LightningElement {

columns = column;
result; 

@wire(getAccounts)
accounts({data,error}){
    console.log(JSON.stringify(data));
    if(data){
        console.log('data is there'+JSON.stringify(data));
        this.result = data;
        this.error = undefined;
    }else if(error){
        this.error = error;
    }

}
getSelectedAccountsContact(event){
     let selectedAccount = event.detail.selectedRows;
     console.log(JSON.stringify(selectedAccount));
     
}
}