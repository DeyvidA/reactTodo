import React from "react";
import './index.css'

const TodoElementEdit = ({valueText,todos, saveTodos, newTextValue}) => {

    const [value, setValue] = React.useState(valueText)
	const [editTodo, setEditTodo] = React.useState(false);

    
	const sendValue = (text) => {
        let oldValue = value;
        let newValue = text;


        return newTextValue(newValue)
    }
    const editTodos = (text) => {

		let algo = sendValue(text);
		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			console.log(text, todoEdit[0])
			todoEdit[0].text = algo;
		}
		setEditTodo(!editTodo)
		todoEdit = [...todos];
		saveTodos(todoEdit);
	}
    



    const enterKey = (event) => {
        
        let valor = event.target.value;
        console.log(valor)

		
        setValue(valor)
        if (event.charCode === 13 && event.target.value !== '') {
            
            console.log(valor)
            sendValue(valor)

			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");
		}

	};

    return (
        <input  
        className="inputEdit"
        onKeyPress={enterKey}
        placeholder={value}
         />
    )
}
export { TodoElementEdit }