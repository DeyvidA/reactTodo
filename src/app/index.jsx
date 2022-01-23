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
	
	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;

	// Todo Actions
	const addTodo = (text) => {
		const newTodo = [...todos];
		newTodo.push({ text, completed: false, priority: false });
		saveTodos(newTodo);
	};

	const deleteTodoCompleted = () => {
		const newTodo = todos.filter((todo) => todo.completed !== true);
		saveTodos(newTodo);
	};


	// Filter Todos
	let showTodos = [];
	if (filterTodo === 'all') {
		showTodos = todos;
		showTodos.sort((a, b) => {
			return (b.priority - a.priority)
		})
	} else if (filterTodo === 'active') {
		showTodos = todos.filter((todo) => todo.completed !== true);
	} else if (filterTodo === 'completed') {
		showTodos = todos.filter((todo) => todo.completed !== false)
	
	}

	//  Local Storage State
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
				<div className="main-container">						
					<TodoCreate addTodo={addTodo} />
					<TodoList
						todos={todos}
						saveTodos={saveTodos}
						showTodos={showTodos}
						totalTodos={totalTodos}
						setFilterTodo={setFilterTodo}
						completedTodos={completedTodos}
						deleteTodoCompleted={deleteTodoCompleted}
					/>
				</div>
			</main>
		</Fragment>
	);
}

export default App;
