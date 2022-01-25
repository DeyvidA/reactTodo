import React from 'react';
import { TodoElementEdit } from '../TodoElementEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faSave, faTrashAlt, faCheckCircle, faEdit} from '@fortawesome/free-regular-svg-icons'
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';



const TodoItem = ({ 
	todo,
	todos,
	index,
	saveTodos,
}) => {
	const [editTodo, setEditTodo] = React.useState(false);

	var oldTextValue;

	const newTextValue = (text) =>  {
		return oldTextValue = text
	}

	const checkTodo = () => {
		let newTodo = todos.filter((todo) => todo.text);
		if (newTodo[index].completed) {
			newTodo[index].completed = false;
		} else {
			newTodo[index].completed = true;
		}
		newTodo = [...todos];
		saveTodos(newTodo);
	};

	const priorityTodo = () => {
		let newTodo = todos.filter((todo) => todo.text);
		if (newTodo[index].priority) {
			newTodo[index].priority = false;
		} else {
			newTodo[index].priority = true;
		}
		newTodo = [...todos];
		saveTodos(newTodo);
	};

	const deleteTodo = () => {
		const newTodo = todos.filter((todo) => todo.text);
		newTodo.splice(index, 1)
		saveTodos(newTodo);
	};

	const editTodos = (text) => {
		var catchText;
		
		
		let element = document.getElementById("buttonEdit");
		element.ariaDisabled = true
		if(oldTextValue === undefined){
			catchText = text;
			
		} else {
			catchText = oldTextValue;
			alert("has been successfully saved")
		}
		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			todoEdit[0].text = catchText;
		}
		setEditTodo(!editTodo)
		todoEdit = [...todos];
		saveTodos(todoEdit);
	};

	const sendValue = (text) => {
		let sendValue = text
		return sendValue
	};




	return (
		<li className={todo.completed ? 'todoItem-complete' : "todoItem"}>
			<div className={`circulo ${todo.completed}`}>
				<button 
				className={editTodo ? `displayNone ` : `buttonList` } 
				onClick={() => checkTodo(index)}>
					<FontAwesomeIcon icon={faCheckCircle} />
				</button>
			</div>
			<div
				key={todo.text}
				className={`todoText ${todo.completed && 'todoText-check'}`}
			>
				{
					editTodo === false?
					todo.text
					:
					<TodoElementEdit 
					todo={todo}
					valueText={todo.text}		
					saveTodos={saveTodos}
					sendValue={sendValue}
					editState={setEditTodo}			
					newTextValue={newTextValue}
					/>
				}
			</div>
			<div className={'actionsButtons'}>
				<button
				className={editTodo ? `buttonList ` : `buttonList buttonEdit` }
				onClick={() => editTodos(todo.text)}>
					<FontAwesomeIcon icon={ editTodo ? faSave : faEdit } />
				</button>
				
				<button 				
					onClick={() => deleteTodo(index)}
					className={editTodo ? `displayNone buttonList` : `buttonList buttonDelete` }>
					<FontAwesomeIcon icon={ faTrashAlt } />
				</button>
				<button
					id='buttonEdit'
					onClick={() => priorityTodo(index)}
					className={todo.priority ? "  buttonList priorityActive" : "buttonList priorityDesable"} 
					>
					<FontAwesomeIcon icon={ faCrown } />
				</button>
			</div>
		</li>
	);
}

export { TodoItem };
