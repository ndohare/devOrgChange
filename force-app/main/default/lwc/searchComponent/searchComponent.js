import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchCls.getAccounts';

export default class SearchComponent extends LightningElement {
    accountName ='';
    @track accountList = [];
    @wire(getAccounts,{actName:'$accountName'})
    retrieveAccounts({error,data}){
        if(data){
            this.accountList = data;
        }
        else if(error){
            this.error = undefined;
        }
    }
    handleKeyChange(event){
        this.event = event.target.value;

    }
}