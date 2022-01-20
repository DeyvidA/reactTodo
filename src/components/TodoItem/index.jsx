import React from 'react';
import { TodoElementEdit } from '../TodoElementEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashAlt, faCheckCircle, faEdit} from '@fortawesome/free-regular-svg-icons'
import './TodoItem.css';
import '../TodoCreate/TodoCreate.css';



const TodoItem = ({ 
	todo,
	todos,
	index,
	checkTodo, 
	saveTodos,
}) => {
	const [editTodo, setEditTodo] = React.useState(false);

	var oldTextValue;

	const newTextValue = (text) =>  {
		return oldTextValue = text
	}


	const deleteTodo = () => {
		const newTodo = todos.filter((todo) => todo.text);
		newTodo.splice(index, 1)
		saveTodos(newTodo);
	};

	const editTodos = (text) => {
		var catchText;

		if(oldTextValue === undefined){
			catchText = text;
			
		} else {
			 catchText = oldTextValue;
		}
		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			todoEdit[0].text = catchText;
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
		<li className={todo.completed ? 'todoItem-complete' : "todoItem"}>
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
					todo={todo}
					valueText={todo.text}		
					saveTodos={saveTodos}
					sendValue={sendValue}
					editState={setEditTodo}			
					newTextValue={newTextValue}
					/>
				}
			</p>
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
			</div>
		</li>
	);
}

export { TodoItem };
