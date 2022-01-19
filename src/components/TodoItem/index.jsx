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
	todos,
	saveTodos
}) => {

	const [editTodo, setEditTodo] = React.useState(false);


	const newValue = (text) => {
		let newValue = text
		return newValue
	}

	const editTodos = (text) => {

		let algo = newValue(text);
		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			console.log(text, todoEdit[0])
			todoEdit[0].text = algo;
		}
		setEditTodo(!editTodo)
		todoEdit = [...todos];
		saveTodos(todoEdit);
	}


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
					editValue={editTodos}
					valueText={todo.text}		
					sendValue={newValue}			
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
