const list = document.querySelector(".pack-list");
const offer = document.querySelector(".product-card__offer");

if (list && offer) {
	list.addEventListener("change", (event) => {
		const { art, price, oldPrice } = event.target.dataset;

		offer.querySelector("[data-art]").textContent = art;
		offer.querySelector("[data-price]").textContent = price;

		const oldPriceNode = offer.querySelector("[data-old-price]");
		oldPriceNode.hidden = !oldPrice;

		if (oldPrice) {
			oldPriceNode.querySelector("[data-old-price-value]").textContent = oldPrice;
		}
	});
}
