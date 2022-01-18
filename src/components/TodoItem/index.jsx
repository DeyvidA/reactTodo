import React from 'react';
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';

const TodoItem = ({ todo, deleteTodo, checkTodo }) => {
	return (
		<li className="TodoItem">
			<div className={`circulo ${todo.completed}`}>
				<button className="buttonList" onClick={() => checkTodo(todo.text)}>✔</button>
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
				X
			</button>
		</li>
	);
}

export { TodoItem };
