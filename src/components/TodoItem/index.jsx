import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';

const TodoItem = ({ todo, deleteTodo, checkTodo }) => {
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
				{todo.text}
			</p>
			<button 				
			onClick={() => deleteTodo(todo.text)}
			className="buttonList buttonDelete">
				<FontAwesomeIcon icon={ faTrash } />
			</button>
		</li>
	);
}

export { TodoItem };
