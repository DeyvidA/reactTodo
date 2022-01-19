import React from "react";

const TodoElementEdit = ({newValue, valueText}) => {


    
    
    const enterKey = (event) => {
        
        newValue = event.target.value;
        console.log(newValue);

		if (event.charCode === 13 && event.target.value !== '') {
            newValue = newValue = event.target.value
            newValue(event.target.value);
			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");
		}

	};

    return (
        <input  
        onKeyPress={enterKey}
        placeholder={valueText} />
    )
}
export { TodoElementEdit }