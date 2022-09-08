import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';

const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput(isEmail);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetFirstName('');
    resetLastName('');
    resetEmail('');
  };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
