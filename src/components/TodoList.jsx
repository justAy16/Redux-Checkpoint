import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTasks } from "../reducers/TodoSlice";

function TodoList() {

    const dispatch = useDispatch()
    const todos = useSelector((state) => {
        return state.tasks;
      })
      const removeTask = (id) => {
        dispatch(deleteTask({ id }));
      };
      const toggleCompleteTask = (id) => {
        dispatch(toggleTasks(id));
      };
    
  return (
    <div>
        <ul className='todo__list'>
        {todos.filter((todo) => !todo.completed).map((todo) => (
            <li key={todo.id} className='todo__list__item'>
                <p>{todo.name}</p>
                <div className='todo__list__options'>
                    <span onClick={() => toggleCompleteTask(todo.id)}><FontAwesomeIcon icon={faCheck}/></span>
                    <span onClick={() => removeTask(todo.id)}><FontAwesomeIcon icon={faTimes}/></span>
                </div>
            </li>
             ))}
        </ul>

        <ul className='todo__list todo__list--completed'>
        {todos.filter((todo) => todo.completed).map((completedTask) => (
        <li key={completedTask.id} className='todo__list__item complete'>
            <p>{completedTask.name}</p>
            <div onClick={() => removeTask(completedTask.id)} style={{cursor:'pointer'}}>
            <span ><FontAwesomeIcon onClick={() => removeTask(completedTask.id)} icon={faCheck}/></span>
            </div>
        </li>
         ))}
        </ul>
    </div>
  )
}

export default TodoList