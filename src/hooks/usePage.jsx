import { useState, useRef } from 'react';

export default function usePage({ data }) {
	const [page, setPage] = useState(1);
	const itemsPerPage = 6;

	const totalItems = data?.residents ? data?.residents?.length : 0;
	const maxPage = Math.ceil(totalItems / itemsPerPage);

	return [page, setPage, maxPage, itemsPerPage];
}
