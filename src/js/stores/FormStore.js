import { EventEmitter } from 'events';

class FormStore extends EventEmitter 
{
    constructor()
    {
        super();
        this.formFields = 
        [
            {
                id: 0,
                value: '',
                placeholder: 'Nome',
                type: 'text',
                required: true
            },
            
            {
                id: 1,
                value: '',
                placeholder: 'Sobrenome',
                type: 'text',
                required: true
            },
        ];
    }
    
    getAll()
    {
        return this.formFields;
    }
};

const formStore = new FormStore;
export default formStore;