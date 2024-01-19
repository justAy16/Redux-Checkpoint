import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from "../reducers/TodoSlice";

function TodoInput() {

    const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter a task before adding!");
      setValue("");
      return;
    }
    dispatch(addTask({ task: value }));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className='todo__input'>
        <input value={value} name='content' onChange={(e) => setValue(e.target.value)} type='text' placeholder='Add task here...'/>
        <button type='submit' className='btn btn-default'><FontAwesomeIcon icon={faPlus}/></button>
    </form>
  )
}

export default TodoInput