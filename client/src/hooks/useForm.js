// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    const handleChanges = e => {
        console.log(e.target.name);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleChanges];
};