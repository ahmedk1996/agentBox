import { LightningElement } from 'lwc';

export default class AgentPage extends LightningElement {

    isAgentOpen = false;
    isAssociateOpen = false;

    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }

    get optionsTwo() {
        return [
            { label: 'associate', value: 'option3' },
            { label: 'test', value: 'option4' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    openAgent() {
        // to open modal set isModalOpen tarck value as true
        this.isAgentOpen = true;
    }

    closeAgent() {
        // to close modal set isModalOpen tarck value as false
        this.isAgentOpen = false;
    }

    submitAgentDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isAgentOpen = false;
    }
 
    openAssociate() {
        // to open modal set isModalOpen tarck value as true
        this.isAssociateOpen = true;
    }
    
    closeAssociate() {
        // to close modal set isModalOpen tarck value as false
        this.isAssociateOpen = false;
    }

    submitAssociateDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isAssociateOpen = false;
    }
}