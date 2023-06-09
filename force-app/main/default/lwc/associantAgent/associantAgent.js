import { LightningElement, api } from 'lwc';

export default class AssociantAgent extends LightningElement {

    @api options1
    @api options2
    @api value
    @api setvalue  

    handleSelected(){
        this.dispatchEvent(new CustomEvent('selected', {details:'works'}));
    }

    handleChange(){
        this.dispatchEvent(new CustomEvent('change', {details:'works2'}));
    }

    closeAssociate(){
        this.dispatchEvent(new CustomEvent('close', {details:'works2'}));
    }

    submitAssociateDetails(){
        this.dispatchEvent(new CustomEvent('submit', {details:'works2'}));
    }
    
    options(){
        this.dispatchEvent(new CustomEvent('options', {details:'works2'}));
    }

    optionsTwo(){
        this.dispatchEvent(new CustomEvent('optionstwo', {details:'works2'}));
    }
}