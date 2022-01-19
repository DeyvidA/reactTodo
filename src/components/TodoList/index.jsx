import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import './TodoList.css';

const  TodoList = ({
	showTodos,
	totalTodos,
	completedTodos,
	deleteTodo,
	checkTodo,
	deleteTodoCompleted,
	setFilterTodo,
	todos,
	saveTodos
}) => {
	return (
		<section className="list">
			<ul className='todoList-container'>
				{showTodos.map((todo) => (
					<TodoItem
						checkTodo={checkTodo}
						deleteTodo={deleteTodo}
						todo={todo}
						key={todo.text}
						todos={todos}
						saveTodos={saveTodos}
					/>
				))}
			</ul>
			<TodoCounter
				deleteTodoCompleted={deleteTodoCompleted}
				totalTodos={totalTodos}
				completedTodos={completedTodos}
				setFilterTodo={setFilterTodo}
			/>
		</section>
	);
}

export { TodoList };
