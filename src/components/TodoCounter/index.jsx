import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ completedTodos, totalTodos, deleteTodoCompleted, setFilterTodo }) => {
	
	const [filterStatePending, setFilterStatePending] = React.useState(false);

	// Filter buttons
	const filterBtns = (event) => {
		const btns = document.querySelectorAll('.filter-btn');
		btns.forEach((btn) => {
			btn.classList.remove('filter-btn-active');
			if (event.target.innerHTML === btn.innerHTML) {
				btn.classList.add('filter-btn-active');
			}
		});

		// functionality
		const target = event.target.classList;

		if (target.contains('all-btn')) {
			target.add('filter-btn-active');
			setFilterTodo('all');
			setFilterStatePending(false)

		}

		if (target.contains('active-btn')) {
			target.add('filter-btn-active');
			setFilterTodo('active');
			setFilterStatePending(true)
		}

		if (target.contains('completed-btn')) {
			target.add('filter-btn-active');
			setFilterTodo('completed');
			setFilterStatePending(false)

		}
	};
	

	

	return (
		<div className="todoCouter-container">
			<p className="items-left">You have {completedTodos} of {totalTodos} completed</p>


			<div className="filterTodo-buttons-container">
				<button className="filter-btn all-btn" onClick={filterBtns}>
					All
				</button>
				<button className="filter-btn active-btn" onClick={filterBtns}>
					Pending
				</button>
				<button className="filter-btn completed-btn" onClick={filterBtns}>
					Completed
				</button>
			</div>
			
			<button 
			onClick={deleteTodoCompleted} 
			className={filterStatePending ? 
			" disable " : "clear-btn"}>
				Clear Completed
			</button>
		</div>
	);
}

export { TodoCounter };
