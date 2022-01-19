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


	// Todo Actions


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

	const editTodos = (text, newValue) => {


		let todoEdit = todos.filter((todo) => todo.text === text);
		if (todoEdit[0]) {
			console.log(text, todoEdit[0])
			todoEdit[0].text = newValue;
		}
		setEditTodo(!editTodo)
		todoEdit = [...todos];
		saveTodos(todoEdit);
	}
	const newValue = () => {

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
					completedTodos={completedTodos}
					totalTodos={totalTodos}
					showTodos={showTodos}
					checkTodo={checkTodo}
					deleteTodo={deleteTodo}
					deleteTodoCompleted={deleteTodoCompleted}
					setFilterTodo={setFilterTodo}
					editTodos={editTodos}
					editTodo={editTodo}
				/>
			</main>
		</Fragment>
	);
}

export default App;
