import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueWasTouched, setValueWasTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && valueWasTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setValueWasTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setValueWasTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
