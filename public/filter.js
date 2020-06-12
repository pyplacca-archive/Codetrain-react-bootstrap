const [
	temp_storage,
	container, 
	counter,
	all_prods
] = [
	[],
	document.getElementById('product-list'),
	document.createElement('span'),
	document.querySelector('.category')
]
counter.setAttribute('class', 'counter')


function applyFilter(elm) {
	const cls = 'filter-active'
	// first remove class name (cls) from previous element...
	try {
		elm.parentNode.querySelector('.' + cls)
		.classList.remove(cls)
	} catch (TypeError) { null }
	// then append it to the selected category...
	elm.classList.add(cls)
	// then filter listed product items
	filterItems(
		elm.getAttribute('filter_name'), 
		elm
	)
}

function filterItems(category, sender) {
	let [count, style] = [0, 'flex']

	for (item of container.children) {
		const tags = item.getAttribute('tags')
		
		if (category !== 'all products') {
			if (tags.includes(category)) {
				style = 'flex'
			} else {
				style = 'none'
				count--
			}
		}
		// changing product item's visibility/display style,
		// helps maintain the insertion order of product items
		item.style.display = style
		count++
	}

	setCounter(sender, count)
}

function setCounter (sender, count) {
	counter.innerText = count
	sender.appendChild(counter)
}


all_prods.classList.add('filter-active')

setCounter(all_prods, container.children.length)

document.getElementById('sidebar').addEventListener(
	'click', 
	({target}) => {
		target.classList.contains('category') ?
		applyFilter(target) : 
		null
	}
)

delete all_prods
