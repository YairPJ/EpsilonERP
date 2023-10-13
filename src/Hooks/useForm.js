import { useState, useEffect, useMemo} from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
      createValidations();  //Aqui es lo que va a volver a ejecutar
    }, [formState]) //Aqui es cada cuando se debe disparar, en este caso cada que el formState cambie

    
    

    const isFormValid = useMemo(()=>{

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue]!==null) return false;
        }

        return true;
    },[formValidation])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidations=()=>{
        const formCheckValues={};

        for(const formField of Object.keys(formValidations)){
            const [fn, errorMesage]=formValidations[formField];

            formCheckValues[`${formField}Valid`]=(formState[formField])?null:errorMesage
        }

        setformValidation(formCheckValues);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}