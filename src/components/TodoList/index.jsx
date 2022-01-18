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
	setFilterTodo
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
