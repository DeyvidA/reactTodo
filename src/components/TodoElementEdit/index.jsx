import React from "react";

const TodoElementEdit = ({newValue, valueText, sendValue}) => {


    
    
    const enterKey = (event) => {
        
        newValue = event.target.value;
        console.log(newValue);

        let valor = newValue
		
        if (event.charCode === 13 && event.target.value !== '') {
            newValue = newValue = event.target.value
            newValue(event.target.value);

            sendValue = valor;

			event.target.value = '';
		} else if (event.charCode === 13 && event.target.value === '') {
			alert("You need write something");
		}

	};

    return (
        <input  
        onKeyPress={enterKey}
        placeholder={valueText}
         />
    )
}
export { TodoElementEdit }