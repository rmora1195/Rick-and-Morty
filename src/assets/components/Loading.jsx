import React from 'react';
import './Loading.css';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img
					src="/public/portal-a.png"
					alt="Loading..."
					className="loading-img"
				/>

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
