import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
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
			<TodoCounter 
				totalTodos={totalTodos}
				completedTodos={completedTodos}
			/>
			<TodoFilterButtons
					setFilterTodo={setFilterTodo}
					deleteTodoCompleted={deleteTodoCompleted}
			/>
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
		</section>
	);
}

export { TodoList };
