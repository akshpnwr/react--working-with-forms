import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  console.log((2 * 3) / 4 + 4 / 4 + 8 - 2 + 5 / 8);

  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    console.log(enteredName);
    setEnteredNameIsValid(true);
    setEnteredName('');
  };

  let nameInputClassses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          // value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
