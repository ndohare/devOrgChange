import { LightningElement,track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const contactColumns = [
    { label : 'Name', fieldName: 'Name', type: 'text'},
    { label: 'Phone', fieldName:'Phone', type: 'Phone'},
    {label: 'Email', fieldName: 'Email', type: 'Email'}
];

export default class LaziLoadingExample extends LightningElement {
    contacts=[];
    selectedContacts = [];

    error;
    contactsColumns = contactColumns;
    rowLimit =25;
   @track rowOffSet=0;
   @track isNewTable = false;
  
    connectedCallback() {
        this.loadData();
    }

    loadData(){
       return  getContacts({ limitSize: this.rowLimit , offset : this.rowOffSet })
        .then(result => {
            let updatedRecords = [...this.contacts, ...result];
         //   alert('updatedRecords'+updatedRecords);
            this.contacts = updatedRecords;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.contacts = undefined;
        });
    }

    loadMoreData(event) {
        const currentRecord = this.contacts;
        const { target } = event;
        target.isLoading = true;

        this.rowOffSet = this.rowOffSet + this.rowLimit;
        this.loadData()
            .then(()=> {
                target.isLoading = false;
            }); 
    }

    getSelectedName(event){
       // alert('onselect'+JSON.stringify(event.detail));
        this.isNewTable = true;
        this.selectedContacts = event.detail.selectedRows;

    }


}