const main = document.querySelector('main');

fetch('./api/images')
	.then(async (response) => {
		const json = await response.json();

		json.forEach((imageName) => {
			const image = document.createElement('img');
			const imagePath = `/images/${imageName}`;

			image.src = imagePath;
			image.alt = imageName;

			main.appendChild(image);
			image.addEventListener('click', () => window.open(imagePath));
		});
	})
	.catch(console.error);
