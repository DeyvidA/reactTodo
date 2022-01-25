import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTim, faTimes } from '@fortawesome/free-solid-svg-icons'

function Header() {
	const [searchState, setSearchState] = React.useState(false);

	const searchTodo = () => {
		setSearchState(!searchState)
	}

	return (
		<header className="header">
			<section className='header-div'>
				<div className="a">
					<h1>TODO LIST</h1>
				</div>
				<div className="headerSearch">
					{
						searchState ?
						
				
						<form action="">
							<input type="text" name="" id="" />
							<button
							onClick={searchTodo}>
								<FontAwesomeIcon icon={ faTimes } />
							</button>
						</form>
						:
						<button
						onClick={searchTodo}>
							<FontAwesomeIcon icon={ faSearch } />
						</button>
					}
				</div>
			</section>
		</header>
	);
}

export { Header };
