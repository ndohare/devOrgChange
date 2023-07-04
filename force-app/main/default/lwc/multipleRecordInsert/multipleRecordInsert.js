import { LightningElement, track, api, wire } from 'lwc';
import saveMdf1 from '@salesforce/apex/mdfInsertController.saveMdf1';
import saveLabel from '@salesforce/label/c.MultipleInsert_Success_Message';
//import saveMdf from '@salesforce/apex/mdfInsertController.saveMdf';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DynamicRecordCreationRows extends NavigationMixin(LightningElement) {
    @api recordId;
    @track error;
    @track opp;
    @track oppName;
    @track oppCurrecy;
    @track data = true;
    @track data1 = true;
    @track Currency;
    @track name;

    label = {
        saveLabel
    };



    connectedCallback() {

        console.log('recordId' + this.recordId)
     
        saveMdf1({ ParAttValue: this.recordId })
            .then(result => {
                console.log('result' + JSON.stringify(result))
                this.opp = result;
                this.oppName = result.Id;
                this.oppCurrecy = result.CurrencyIsoCode;
                console.log('oppName' + this.oppName);
                console.log('oppCurrecy' + this.oppCurrecy);
                if (this.oppName != '' && this.oppName != null) {
                    this.name = false;
                }
                if (this.oppCurrecy != '' && this.oppCurrecy != null) {
                    this.Currency = false;
                }
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.opp = undefined;
                console.log('error ' + JSON.stringify(error));
            });
    }

    /* @wire(saveMdf1, { recordID: '$recordId' })
     debugger;
     WireContactRecords({ error, data }) {
         console.log('data+++' + data);
         if (data) {
             this.opp = data;
             this.error = undefined;
         } else {
             this.error = error;
             this.opp = undefined;
         }
     }*/



    keyIndex = 0;
    @track itemList = [{
        id: 0,
        data: true,
        data1: true

    }];



    addRow() {
        ++this.keyIndex;
        var newItem = [{ id: this.keyIndex }];
        this.itemList = this.itemList.concat(newItem);
        if (this.keyIndex > 0) {
            this.data = true;
            this.data1 = false;
        }
    }



    removeRow(event) {
        if (this.itemList.length >= 2) {
            this.itemList = this.itemList.filter(function(element) {
                return parseInt(element.id) !== parseInt(event.target.accessKey);
            });
        }
    }




    handleSubmit() {
        var isVal = true;
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            isVal = isVal && element.reportValidity();
        });
        if (isVal) {
            this.template.querySelectorAll('lightning-record-edit-form').forEach(element => {
                element.submit();
            });
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    //message: 'Records successfully created',
                    message: this.label.saveLabel,
                    variant: 'success',
                }),
            );
            // Navigate to the Account home page
            this[NavigationMixin.Navigate]({
                type: 'standard__recordRelationshipPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Opportunity',
                    relationshipApiName: 'MDF_Investments__r',
                    actionName: 'view'
                },
            });
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: 'Please enter all the required fields',
                    variant: 'error',
                }),
            );
        }
    }


    handleCancel() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Opportunity',
                relationshipApiName: 'MDF_Investments__r',
                actionName: 'view'
            },
        });

    }


}