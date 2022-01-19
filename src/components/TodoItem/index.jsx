import React from 'react';
import { TodoElementEdit } from '../TodoElementEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';

const TodoItem = ({ 
	todo,
	deleteTodo, 
	checkTodo, 
	editTodos, 
	editTodo, 
	}) => {

		const valueText = todo.text
	return (
		<li className="TodoItem">
			<div className={`circulo ${todo.completed}`}>
				<button className="buttonList" onClick={() => checkTodo(todo.text)}>
					<FontAwesomeIcon icon={faCheck} />
				</button>
			</div>
			<p
				key={todo.text}
				className={`todoText ${todo.completed && 'todoText-check'}`}
			>
				{
					editTodo === false?
					todo.text
					:
					<TodoElementEdit 
					newValue={editTodos}
					valueText={valueText}
					/>
				}
			</p>
			<div>
				<button
				onClick={() => editTodos(todo.text)}>
					<FontAwesomeIcon icon={ faEdit } />
				</button>
				<button 				
				onClick={() => deleteTodo(todo.text)}
				className="buttonList buttonDelete">
					<FontAwesomeIcon icon={ faTrash } />
				</button>
			</div>
		</li>
	);
}

export { TodoItem };
