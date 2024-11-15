import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './assets/components/CardInfo';
import ResidentsList from './assets/components/ResidentsList';
import Search from './assets/components/Search';
import './App.css';
import Navbar from './assets/components/Navbar';
import usePage from './hooks/usePage';
import Buttons from './assets/components/Buttons';
import Loading from './assets/components/Loading';

function App() {
	const [location, setLocation] = useFetch();
	const [locationId, setLocationId] = useState(1);
	const [page, setPage, maxPage, itemsPerPage] = usePage({ data: location });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);

	const currentPageItem = location?.residents?.length
		? location?.residents?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
		: [];

	//Loader
	useEffect(() => {
		const fakeDataFetch = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		};

		fakeDataFetch();
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Navbar />
			<div className="hero" />

			<div className="container">
				<Search setLocationId={setLocationId} />
				<CardInfo location={location} />
				<ResidentsList residents={currentPageItem} />
			</div>
			<div className="pagination">
				<Buttons page={page} maxPage={maxPage} setPage={setPage} />
			</div>
		</>
	);
}

export default App;
