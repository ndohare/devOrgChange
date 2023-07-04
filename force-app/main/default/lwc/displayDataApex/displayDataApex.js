import { LightningElement,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController1.getAccounts';
export default class DisplayDataApex extends LightningElement {
    @track data;

    @wire(getAccounts) accountRecords({error,data}){
        if(data){
            this.data = data;
        }
        else if(error){
            this.error = undefined;
        }
    }
}