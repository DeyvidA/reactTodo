import React from 'react';
import { TodoElementEdit } from '../TodoElementEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashAlt, faEdit, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
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

	var lack;

	const newTextValue = (text) =>  {
		return lack = text
	}


	const editTodos = (text) => {
		var algo

		if(lack === undefined){
			algo = text;
			
		} else {
			 algo = lack;
		}
		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			console.log(text, todoEdit[0])
			todoEdit[0].text = algo;
		}
		setEditTodo(!editTodo)
		todoEdit = [...todos];
		saveTodos(todoEdit);
	}

	const sendValue = (text) => {
		let sendValue = text
		return sendValue
	}


	return (
		<li className={todo.completed ? 'complete' : "todoItem"}>
			<div className={`circulo ${todo.completed}`}>
				<button className={editTodo ? `displayNone ` : `buttonList` } onClick={() => checkTodo(todo.text)}>
					<FontAwesomeIcon icon={faCheckCircle} />
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
					valueText={todo.text}		
					sendValue={sendValue}
					saveTodos={saveTodos}
					todo={todos}
					newTextValue={newTextValue}			
					/>
				}
			</p>
			<div>
				<button
				className={editTodo ? `buttonList bottonSaveEdit` : `buttonList buttonEdit` }
				onClick={() => editTodos(todo.text)}>
					<FontAwesomeIcon icon={editTodo ? faSave : faEdit} />
				</button>
				<button 				
				onClick={() => deleteTodo(todo.text)}
				className={editTodo ? `displayNone buttonList` : `buttonList buttonDelete` }>
					<FontAwesomeIcon icon={ faTrashAlt } />
				</button>
			</div>
		</li>
	);
}

export { TodoItem };
