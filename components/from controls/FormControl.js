
import React from 'react'
import CheckBox from './Checkbox/CheckBox';
import Input from './Input/Input';
import TextArea from './Textarea/TextArea';

function FormControl(props) {

    const {control, ...rest} = props

    switch(control){
        case "input":
            return <Input {...rest} />;
        case "textarea":
            return <TextArea {...rest} />
        case "checkbox":
            return <CheckBox {...rest} />
        default:
            return null;
        
    }
}

export default FormControl;
