import React from 'react';
import './TodoCreate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoCreate = ({ addTodo }) => {

	// Add Todo con enter

	// const enterKey = (event) => {
	// 	let validation = event.target.value.trim();

	// 	if (event.charCode === 13 && validation) {
	// 		addTodo(event.target.value);
	// 		event.target.value = '';
	// 	} else if (event.charCode === 13 && event.target.value === '') {
	// 		alert("You need write something");			
	// 	} else if(event.charCode === 13 && validation.length === 0){
	// 		alert ("You can not add 'Blank Spaces'")
	// 	}
	// };

	const addButton = () => {
		let event = document.getElementById('textArea').value;
		let validation = event.trim();

		if (validation) {
			addTodo(event);
			document.getElementById('textArea').value = '';
		} else if (event === '') {
			alert("You need write something");			
		} else if(validation.length === 0){
			alert ("You can not add 'Blank Spaces'")
		}
	}

	const getScrollHeight = (elm) =>{
		var savedValue = elm.value
		elm.value = ''
		elm._baseScrollHeight = elm.scrollHeight
		elm.value = savedValue
	};
	  
	const onExpandableTextareaInput = ({ target:elm }) =>{
		// make sure the input event originated from a textarea and it's desired to be auto-expandable
		if( !elm.classList.contains('autoExpand') || !elm.nodeName === 'TEXTAREA' ) return
		
		var minRows = elm.getAttribute('data-min-rows')|0, rows;
		!elm._baseScrollHeight && getScrollHeight(elm)
	  
		elm.rows = minRows
		rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
		elm.rows = minRows + rows
	};
	    
	  // global delegated event listener
	  document.addEventListener('input', onExpandableTextareaInput)
	  

	return (
		<section className="createTodo">
			<h3>Add Here your new task</h3>
			<textarea
				rows='1'
				id='textArea'
				data-min-rows='1' 
				className="input autoExpand"
				placeholder="Create a new todo..."
				
			></textarea>
			<button 
			key={addTodo}
			className="addButton" 
			onClick={addButton} 
			>
				Create task
			</button>
		</section>
	);
}

export { TodoCreate };
