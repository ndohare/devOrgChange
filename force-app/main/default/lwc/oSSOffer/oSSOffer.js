import { LightningElement, wire, track, api } from 'lwc';
import getOpportunity from '@salesforce/apex/OfferCreation.getOpportunity'; //To fetch method
//import { NavigationMixin } from 'lightning/navigation';
//import { getObjectInfo } from 'lightning/uiObjectInfoApi';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CheckboxGroupBasic extends LightningElement() {
    @api recordId;
    // @track error;
    clickedButtonLabel;


    @track areButtonsVisible = false;
    handleChange(event) {
        this.areButtonsVisible = event.target.checked;
        console.log('this.areButtonsVisible' + this.areButtonsVisible);
    }
    value = '';

    get options() {
        return [
            { label: 'Product Category', value: 'Product Category' },
            { label: 'SKU Level', value: 'SKU Level' },
        ];
    }

    values = '';

    get option() {
        return [
            { label: 'Lumpsum one Time', value: 'Lumpsum one Time' },
            { label: 'Indirect - Sell Out', value: 'Indirect - Sell Out' },
        ];
    }

    @track LumpsumOneTime = false;
    @track IndirectSellOut = false;

    handleRadioChange(event) {
        const selectedOption = event.detail.value;
        alert('selectedOption ' + selectedOption);
        if (selectedOption == 'Lumpsum one Time') {
            this.LumpsumOneTime = true;
        } else {
            this.LumpsumOneTime = false;
        }


        if (selectedOption == 'Indirect - Sell Out') {
            this.IndirectSellOut = true;
        } else {
            this.IndirectSellOut = false;
        }

    }

    handleSave(event) {
        this.clickedButtonLabel = event.target.label
    }


    handleCancel(event) {
        var url = window.location.href;
        var value = url.substr(0, url.lastIndexOf('/') + 1);
        window.history.back();
        return false;

    }

}