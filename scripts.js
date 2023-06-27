const accordingElementHeaders = document.querySelectorAll('.accordion__item--header');

accordingElementHeaders.forEach(accordionElementHeader => {
	accordionElementHeader.addEventListener('click', event => {
		const clickedAccordionElementHeader = event.target;
		const accorionElementBody = clickedAccordionElementHeader.nextElementSibling;

		// closing other accordion
		accordingElementHeaders.forEach(header => {
			if (header !== clickedAccordionElementHeader) {
				header.classList.remove('active');
				header.nextElementSibling.style.maxHeight = 0;
			}
		});

		// open/close accordion
		if (clickedAccordionElementHeader.classList.contains('active')) {
			clickedAccordionElementHeader.classList.remove('active');
			accorionElementBody.style.maxHeight = 0;
		} else {
			clickedAccordionElementHeader.classList.add('active');
			accorionElementBody.style.maxHeight = accorionElementBody.scrollHeight + 'px';
		}
	});
});
