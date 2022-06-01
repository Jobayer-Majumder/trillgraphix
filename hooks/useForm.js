import React from 'react';


const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const useForm = () => {
    const [inputErr, setInputErr] = React.useState({});
    const [validValue, setValidValue] = React.useState({});
    const [inputValue, setInputValue] = React.useState({});


    const handleInputValidation = e => {
        const { name, value } = e.target;
        setInputValue({...inputValue, [name]: value});
        const prevValue = { ...validValue };
        if (name === 'number') {
            prevValue[name] = value;
            setValidValue(prevValue);
        }
        else if (name === 'email') {
            if (!emailRegex.test(value)) {
                setInputErr({ ...inputErr, name: name, errMassage: 'Please enter valid email !' })
                prevValue[name] = null;
                setValidValue(prevValue);
            } else {
                prevValue[name] = value;
                setValidValue(prevValue);
                setInputErr(null);
            }
        }
    };



    return { handleInputValidation, inputErr, inputValue };
};

export default useForm;