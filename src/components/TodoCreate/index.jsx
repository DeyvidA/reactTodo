import React from 'react';
import './TodoCreate.css';

const TodoCreate = ({ addTodo }) => {

	// Add Todo con enter
	const enterKey = (event) => {
		let validation = event.target.value.trim();

		if (event.charCode === 13 && validation) {
			addTodo(event.target.value);
			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");			
		} else if(event.charCode === 13 && validation.length === 0){
			alert ("You can not add 'Blank Spaces'")
		}
	};

	return (
		<div className="createTodo">
			<div className="circulo"></div>
			<textarea
				className="input"
				placeholder="Create a new todo..."
				onKeyPress={enterKey}
			></textarea>
		</div>
	);
}

export { TodoCreate };
