import './Buttons.css';

export default function Buttons({ page, maxPage, setPage }) {
	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const onNext = () => {
		if (page <= maxPage) {
			setPage(page + 1);
		}
	};

	return (
		<>
			<div className="container1">
				<button className="btn12" onClick={onPrev} disabled={page === 1}>
					Before
				</button>
				<p className="page-info">
					Page {page}/{maxPage}
				</p>
				<button className="btn12" onClick={onNext} disabled={page === maxPage}>
					Next
				</button>
			</div>
		</>
	);
}
