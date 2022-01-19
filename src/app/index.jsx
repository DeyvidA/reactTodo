import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { TodoCreate } from '../components/TodoCreate';
import { TodoList } from '../components/TodoList/';
import './App.css';

const App = () => {
	// localStorage
	let initialTodos = JSON.parse(localStorage.getItem('todos'));
	if (!initialTodos) {
		initialTodos = [];
	}

	const [todos, saveTodos] = useState(initialTodos);
	const [filterTodo, setFilterTodo] = useState('all');
	const [editTodo, setEditTodo] = useState(false);
	
	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;



	// Acciones de los Todo

	const addTodo = (text) => {
		const newTodo = [...todos];
		newTodo.push({ text, completed: false });
		saveTodos(newTodo);
	};

	
	const deleteTodo = (text) => {
		const newTodo = todos.filter((todo) => todo.text !== text);
		saveTodos(newTodo);
	};

	const deleteTodoCompleted = () => {
		const newTodo = todos.filter((todo) => todo.completed !== true);
		saveTodos(newTodo);
	};


	const checkTodo = (text) => {
		let newTodo = todos.filter((todo) => todo.text === text);
		if (newTodo[0].completed) {
			newTodo[0].completed = false;
		} else {
			newTodo[0].completed = true;
		}

		newTodo = [...todos];
		saveTodos(newTodo);
	};

	const nuwValue = () => {
		let un = 'tu';
		return un
	}

	const onEdit = () =>{
		setEditTodo(true);
	}

	const handleEdit = (text) => {
		onEdit();
		if(editTodo === false){
			setEditTodo(true);
			console.log(text, editTodo)
			let newValue = todos.filter((todo) => todo.text === text);
			if (newValue[0].text === text) {
				
				let newText = nuwValue();
				newValue[0].text = newText
				console.log(newValue[0].text)

				return(
					input()
				)

			} else {
				newValue[0].completed = true;
			}


		} else {
			setEditTodo(editTodo === false)
		}
	};

	const input = () => {
		if(editTodo === true){
			<input></input>
		} else {
			<p>.</p>
		}
	}
	
	// Filtrar Todos
	let showTodos = [];
	if (filterTodo === 'all') {
		showTodos = todos;
	} else if (filterTodo === 'active') {
		showTodos = todos.filter((todo) => todo.completed !== true);
	} else if (filterTodo === 'completed') {
		showTodos = todos.filter((todo) => todo.completed !== false);
	}
	

	// Estado Local Storage
	useEffect(() => {
		if (initialTodos) {
			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			localStorage.setItem('todos', JSON.stringify([]));
		}
	}, [todos, initialTodos]);

	
	// App UI
	return (
		<Fragment>	
			<Header />
			<main className="main">
				<TodoCreate   addTodo={addTodo} />
				<TodoList
					handleEdit={handleEdit}
					completedTodos={completedTodos}
					totalTodos={totalTodos}
					showTodos={showTodos}
					checkTodo={checkTodo}
					deleteTodo={deleteTodo}
					deleteTodoCompleted={deleteTodoCompleted}
					setFilterTodo={setFilterTodo}
					setEditTodo={setEditTodo}
					editTodo={editTodo}
				/>
			</main>
		</Fragment>
	);
}

export default App;
