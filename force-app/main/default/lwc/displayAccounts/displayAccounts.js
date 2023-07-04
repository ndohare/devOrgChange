import { LightningElement , wire,track} from 'lwc';
import getAccounts from '@salesforce/apex/getAccountController.getAccounts';

const columns = [
    {label:'Name', fieldName:'Name', type: 'text'},
    {label:'Account Number', fieldName:'AccountNumber'},
    {label:'Phone', fieldName:'Phone', type:'Phone'},
];

export default class DisplayAccounts extends LightningElement {
 
 columns = columns; 
 result;  		
 displayTableTwo = false;
 dataDisplay;

 @wire(getAccounts)
 accounts({data,error}){
     if(data){
	     this.result = data;
         console.log('data is there'+JSON.stringify(data));
     }
     else{
         this.error = error;
     }
 }
		
		getSelectedColumn(event){
				console.log('on selected'+event.detail.selectedRows);
				let selectedColumn = event.detail.selectedRows;
				console.log('+++++++++++'+selectedColumn); 
				if(selectedColumn){
						this.displayTableTwo =  true;
						this.dataDisplay = selectedColumn;
				}
				
		}

}