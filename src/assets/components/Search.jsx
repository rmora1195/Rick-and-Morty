import { useRef, useState } from 'react';
import './Search.css';

function Search({ setLocationId }) {
	const [error, setError] = useState('');
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const id = parseInt(inputRef.current.value);

		if (isNaN(id)) {
			setError('❌ Invalid number');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		if (id < 1 || id > 126) {
			setError('❌ Hey! you must provide an Id from 1 to 126');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		setLocationId(id);

		e.target.reset();
	};

	return (
		<div id="search-bar">
			<form onSubmit={onSubmit} className="search">
				<input
					ref={inputRef}
					type="text"
					className="search__input"
					placeholder="ID to explore a Universe"
				/>
				<button className="search__btn">Search</button>
			</form>
			<p className="message__error">{error && error}</p>
		</div>
	);
}

export default Search;
