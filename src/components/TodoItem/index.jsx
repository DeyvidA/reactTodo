import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';

const TodoItem = ({ todo, deleteTodo, checkTodo , handleEdit, setEditTodo, editTodo }) => {

	const onEdit = () => {
		setEditTodo(!editTodo)
	}

	// Add Todo con enter
	const enterKey = (event) => {
		console.log(event.target.value)
		if (event.charCode === 13 && event.target.value !== '') {
			handleEdit(event.target.value);
			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");
		}
	};

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
					editTodo ?  
					
					todo.text
					:
					<div>
						<input 
						id='newValue'
						onKeyPress={enterKey}
						placeholder={todo.text} />
						<button>
							<FontAwesomeIcon icon={faCheck} />
						</button>
					</div>
				}
			</p>
			<div className="buttonSection">
				<button
				onClick={() => handleEdit(todo.text)}>
					<FontAwesomeIcon icon={faEdit} />
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
