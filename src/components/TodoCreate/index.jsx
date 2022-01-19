import React from 'react';
import './TodoCreate.css';

const TodoCreate = ({ addTodo }) => {

	// Add Todo con enter
	const enterKey = (event) => {
		if (event.charCode === 13 && event.target.value !== '') {
			addTodo(event.target.value);
			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");
		}
	};

	return (
		<div className="createTodo">
			<div className="circulo"></div>
			<input
				className="input"
				placeholder="Create a new todo..."
				onKeyPress={enterKey}
			></input>
		</div>
	);
}

export { TodoCreate };
