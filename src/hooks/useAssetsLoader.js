"use client"
import { useEffect, useState } from 'react';

// Maximum time (ms) to wait for assets before rendering anyway.
// Prevents 504 timeouts on cold starts when fonts/images aren't cached.
const ASSETS_TIMEOUT_MS = 3000;

function useAssetsLoader(images = [], fonts = [], videos = []) {
	const [areImagesLoaded, setImagesLoaded] = useState(false);
	const [areFontsLoaded, setFontsLoaded] = useState(false);
	const [areVideosLoaded, setVideosLoaded] = useState(false);

	useEffect(() => {
		// Helper: resolves whichever comes first — the promise or the timeout
		const withTimeout = (promise) =>
			Promise.race([
				promise,
				new Promise((resolve) => setTimeout(resolve, ASSETS_TIMEOUT_MS)),
			]);

		// Load images
		if (images.length) {
			const imagePromises = images.map((imageSrc) => {
				const img = new Image();
				img.src = imageSrc;
				return withTimeout(img.decode().catch(() => {}));
			});

			Promise.all(imagePromises).then(() => {
				setImagesLoaded(true);
			});
		} else {
			setImagesLoaded(true);
		}

		// Load fonts
		if (fonts.length) {
			const fontPromises = fonts.map((fontSpec) =>
				withTimeout(document.fonts.load(fontSpec).catch(() => {}))
			);

			Promise.all(fontPromises).then(() => {
				setFontsLoaded(true);
			});
		} else {
			setFontsLoaded(true);
		}

		// Load videos
		if (videos.length) {
			const videoPromises = videos.map((videoSrc) => {
				const videoPromise = new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = videoSrc;
					video.onloadeddata = resolve;
					video.onerror = resolve;
				});
				return withTimeout(videoPromise);
			});

			Promise.all(videoPromises).then(() => {
				setVideosLoaded(true);
			});
		} else {
			setVideosLoaded(true);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return { areImagesLoaded, areFontsLoaded, areVideosLoaded };
}

export default useAssetsLoader;
