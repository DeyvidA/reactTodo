import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoFilterButtons } from '../TodoFilterButtons';
import './TodoList.css';

const  TodoList = ({
	todos,
	showTodos,
	saveTodos,
	checkTodo,
	totalTodos,
	setFilterTodo,
	completedTodos,
	deleteTodoCompleted,
}) => {
	return (
		<section className="list-element">
			<ul className='todoList-container'>
				{showTodos.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo }
						todos={todos}
						checkTodo={checkTodo}
						saveTodos={saveTodos}
						index={index}
					/>
				))}
			</ul>
			<TodoFilterButtons
				totalTodos={totalTodos}
				setFilterTodo={setFilterTodo}
				completedTodos={completedTodos}
				deleteTodoCompleted={deleteTodoCompleted}
			/>
		</section>
	);
}

export { TodoList };
