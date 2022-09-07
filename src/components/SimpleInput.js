import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((name) => name.trim('') !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email) => email.includes('@'));

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = useInput((name) => {
  //   return name.trim('') !== '';
  // }, enteredName);

  // const enteredNameIsValid = enteredName.trim('') !== '';
  // co = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    if (!enteredEmailIsValid && !enteredEmailIsValid) return;

    // setEnteredName('');
    // setEnteredNameTouched(false);

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="e-mail">E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
