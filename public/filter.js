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
		elm
		.parentNode
		.querySelector('.' + cls)
		.classList
		.remove(cls)
	} 
	catch (TypeError) {
		null
	}
	finally {
		// then append it to the selected category...
		elm.classList.add(cls)
		// then filter listed product items
		filterItems(
			elm.getAttribute('filter-by'), 
			elm
		)
	}
}

function filterItems(category, sender) {
	let [count, style, cls] = [0, 'flex', 'filtered-out']

	for (item of container.children) {
		const tags = item.getAttribute('tags')
		
		if (category !== 'all products') {
			if (tags.includes(category)) {
				// style = 'flex'
				item.classList.remove(cls)
			} else {
				// style = 'none'
				item.classList.add(cls)
				count--
			}
		} else {
			item.classList.remove(cls)
		}
		// changing product item's visibility/display style,
		// helps maintain the insertion order of product items
		// item.style.display = style
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
