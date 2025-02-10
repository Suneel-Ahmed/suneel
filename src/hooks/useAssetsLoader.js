"use client"
import { useEffect, useState } from 'react';

function useAssetsLoader(images = [], fonts = [], videos = []) {
	const [areImagesLoaded, setImagesLoaded] = useState(false);
	const [areFontsLoaded, setFontsLoaded] = useState(false);
	const [areVideosLoaded, setVideosLoaded] = useState(false);

	useEffect(() => {
		// Load images
		if (images.length) {
			const imagePromises = images.map((imageSrc) => {
				const img = new Image();
				img.src = imageSrc;
				return img.decode();
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
				document.fonts.load(fontSpec)
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
				return new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = videoSrc;

					video.onloadeddata = () => {
						resolve();
					};

					// Error handling if needed
					video.onerror = () => {
						resolve(); // or reject, depending on how you want to handle errors
					};
				});
			});

			Promise.all(videoPromises).then(() => {
				setVideosLoaded(true);
			});
		} else {
			setVideosLoaded(true);
		}
	}, [images, fonts, videos]);

	return { areImagesLoaded, areFontsLoaded, areVideosLoaded };
}

export default useAssetsLoader;
