import React from "react";

const TodoElementEdit = ({newValue, valueText}) => {

    const enterKey = (event) => {
        console.log(event.target.value)
		if (event.charCode === 13 && event.target.value !== '') {
			newValue(event.target.value);
			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value == '') {
			alert("You need write something");
		}
	};

    return (
        <input placeholder="Vacio" 
        onKeyPress={enterKey}
        placeholder={valueText}/>
    )
}
export { TodoElementEdit }