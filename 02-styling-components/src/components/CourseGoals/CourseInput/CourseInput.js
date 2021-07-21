import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import styled from 'styled-components'

// const FormControl = styled.div`
// & {
//   margin: 0.5rem 0;
// }

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.valid ? 'black' : 'red'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.valid ? '#ccc' : 'red'};
//   background: ${props => props.valid ? 'transparent' : '#ffd7d7'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
