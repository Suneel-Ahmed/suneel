"use client"
import { useEffect } from 'react';

export default function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title ? `Suneel | ${title}` : 'Suneel';
	}, [title]);
}
