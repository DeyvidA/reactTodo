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
	editTodos,
	editTodo
}) => {
	return (
		<section className="list">
			<ul>
				{showTodos.map((todo) => (
					<TodoItem
						checkTodo={checkTodo}
						deleteTodo={deleteTodo}
						todo={todo}
						key={todo.text}
						editTodos={editTodos}
						editTodo={editTodo}
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
