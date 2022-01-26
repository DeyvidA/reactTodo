import React, { Fragment, useEffect, useState } from 'react';
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
	} else if(filterTodo === 'priority') {
		showTodos = todos.filter((todo) => todo.priority !== false)
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
			<main className="main">
				<section className='sectionDates'>
					<div className="sectionDates-header">
						<div className="header-logo"></div>
						<h3>Nicarao Agency</h3>
					</div>
					<div className="section-reminders">
						<div className="reminders-title">
							<h4>Weekly Pinned</h4>
							<button>View All</button>
						</div>
						<div className="reminders-container">


							<div className='reminder reminder1'>
								<div className="reminder-icon">
									<div className='icon'></div>
								</div>
								<div className="reminder-text">
									<div className="reminder-title">
										<h4>Call doctor for test</h4>
										<span className="reminderDate">15 Mar 2022 - 9:00 AM</span>
									</div>
									<div className="reminder-info">
										<button>Personal</button>
										<p>Ask for blood test and GYM certificate.</p>
									</div>
								</div>
							</div>

							<div className='reminder reminder2'>
								<div className="reminder-icon">
									<div className='icon'></div>
								</div>
								<div className="reminder-text">
									<div className="reminder-title">
										<h4>Beatrice's Bday</h4>
										<span className="reminderDate">22 mar 2022</span>
									</div>
								</div>
							</div>

							<div className='reminder addReminder'>
								<div className="reminder-icon">
									<div className='icon'></div>
								</div>
								<div className="reminder-text">
									<h4>Add New weekly pin</h4>
								</div>
							</div>
						</div>

						<div className="reminder reminderCalendar">
							<table>
								<thead>
									<tr>
										<th>Mon</th>
										<th>Tue</th>
										<th>Wed</th>
										<th>Thu</th>
										<th>Fri</th>
										<th>Sat</th>
										<th>Sun</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='lastMonth'>27</td>
										<td className='lastMonth'>28</td>
										<td className='lastMonth'>29</td>
										<td className='lastMonth'>30</td>
										<td className='lastMonth'>31</td>
										<td>1</td>
										<td>2</td>
									</tr>
									<tr>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
									</tr>
									<tr>
										<td>10</td>
										<td>11</td>
										<td>12</td>
										<td>13</td>
										<td>14</td>
										<td>15</td>
										<td>16</td>
									</tr>
									<tr>
										<td>17</td>
										<td>18</td>
										<td>19</td>
										<td>20</td>
										<td>21</td>
										<td>22</td>
										<td>23</td>
									</tr>
									<tr>
										<td>24</td>
										<td>25</td>
										<td className='day'>26</td>
										<td>27</td>
										<td>28</td>
										<td>29</td>
										<td>30</td>
									</tr>
									<tr>
										<td>31</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				<section className='sectionPricipal'>
					<div className="section">
						<div className='headerPricipal'>
							<div>
								<h2>To Do List</h2>
								<h2 className='days'>Wednesday 26</h2>
							</div>
							<TodoCreate addTodo={addTodo} />
						</div>						
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
				</section>

				<section className='sectionChill'>
					<div className="login-info">
						<div className="userData">
							<h4>Deyvid Arauz</h4>
							<h6>My settings</h6>
						</div>
						<div className='userProfile'></div>
					</div>
					<div className="widgets">
							<div className="widget widget-music">
								<div className="music">
									<div className="music-img"></div>
									<div className="music-name">
										<h5>Toys Soldier</h5>
										<span>Eminem</span>
									</div>
								</div>
								<div className="reproductor-controls"></div>	

							</div>
							<div className="widget widgetTime">
								<h3>8:48 AM</h3>
								<span>Now is almost Sunny</span>
							</div>
							<div className="widget widget-info">
								<div className="wiget-info-text">
									<h2>Unslash <br />
									the freelance <br />
									super power</h2>
									<span>Un limited task, premium features and much more</span>
								</div>
								<div className="info-more">
									<img src="../images/undraw_job_hunt_re_q203.svg" alt="" />
									<div className='next'></div>
								</div>
							</div>

						</div>
				</section>
			</main>
		</Fragment>
	);
}

export default App;
