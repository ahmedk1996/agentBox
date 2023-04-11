import { LightningElement, api } from 'lwc';

export default class AppointAgent extends LightningElement {

    @api options1
    @api options2
    @api value


    handleSelected(){
        this.dispatchEvent(new CustomEvent('selected', {details:'works'}));
    }

    handleChange(){
        this.dispatchEvent(new CustomEvent('change', {details:'works2'}));
    }

    closeAgent(){
        this.dispatchEvent(new CustomEvent('close', {details:'works2'}));
    }

    submitAgentDetails(){
        this.dispatchEvent(new CustomEvent('submit', {details:'works2'}));
    }
    
    options(){
        this.dispatchEvent(new CustomEvent('options', {details:'works2'}));
    }

    optionsTwo(){
        this.dispatchEvent(new CustomEvent('optionstwo', {details:'works2'}));
    }
    // @api showPositive;
    // @api showNegative;
    // @api positiveButtonLabel = 'Save';
    // @api negativeButtonLabel = 'Cancel';
    // @api showModal;
  
    // constructor() {
    //   super();
    //   this.showNegative = true;
    //   this.showPositive = true;
    //   this.showModal = false;
    // }
  
    // handlePositive() {
    //   this.dispatchEvent(new CustomEvent('positive'));
    // }
    
    // handleNegative() {
    //   this.dispatchEvent(new CustomEvent('negative'));
    // }
  
    // handleClose() {
    //   this.dispatchEvent(new CustomEvent('close'));
    // }
  
}