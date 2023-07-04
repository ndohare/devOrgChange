import { LightningElement ,track} from 'lwc';

export default class SampleComp extends LightningElement {
@track greeting;
handleGreetingValue(event){
    this.greeting = event.target.value;
}
}