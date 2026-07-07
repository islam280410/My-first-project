const slidesPlugin = (activeSlide = 0) => {
	const slides = document.querySelectorAll('.slide')

	slides[activeSlide].classList.add('active')

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActive()
			slide.classList.add('active')
		})
	}

	const clearActive = () => {
		slides.forEach((slide) => {
			slide.classList.remove('active')
		})
	}
}

slidesPlugin(4)