import { LightningElement } from 'lwc';
import getHtmlData from '@salesforce/apex/readHtmlFileController.getHtmlData';

export default class GetHtmlData extends LightningElement {

    getData(){
        getHtmlData()
            .then(result =>{
                 console.log('result getting '+result);
						     const blb = result;
                 const reader = new FileReader();
                 reader.addEventListener('loadend', (e) => {
                 const text = e.srcElement.result;
                 console.log('text '+text);
                });
                 reader.readAsArrayBuffer(blb);
						     console.log(' reader.readAsText(blb)'+ reader.readAsArrayBuffer(blb));
               })
              .catch(error=>{
                this.error = error;
                console.log('error'+error);
            })
        }
    }