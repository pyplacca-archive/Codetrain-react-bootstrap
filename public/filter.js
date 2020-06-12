const [
	temp_storage,
	container, 
	counter
] = [
	[],
	document.getElementById('product-list'),
	document.createElement('span')
]
counter.setAttribute('class', 'counter')


function applyFilter(elm) {
	const cls = 'filter-active'
	// first remove class name (cls) from previous element...
	const previous = document.querySelector('.' + cls)
	previous ? previous.classList.remove(cls) : null
	// then append it to the selected category...
	elm.classList.add(cls)
	// then filter listed items
	filterItems(
		elm.getAttribute('filter_name'), 
		elm
	)
}

function filterItems(category, sender) {
	if (category !== 'all products') {
		// retrieve any item that belongs to the selected category from temp_storage
		temp_storage.reduce((arr, elt, i) => {
			elt.getAttribute('tags').includes(category) ?
				container.appendChild(elt) :
					arr.push(elt)
			return arr
		}, []);
		// then remove the items that don't belong to the 
		// selected category from the container (product-list)
		[...container.children].forEach(item => {
			const tags = item.getAttribute('tags')

			if (!tags.includes(category)) {
				temp_storage.push(item)
				container.removeChild(item)
			}
		})
	} else {
		while (temp_storage.length) {
			container.appendChild(temp_storage.pop())
		}
	}
	setCounter(sender)
}

function setCounter (sender) {
	counter.innerText = container.children.length
	sender.appendChild(counter)
}


setCounter(document.querySelector('.category'))

document.getElementById('sidebar').addEventListener(
	'click', 
	({target}) => {
		target.classList.contains('category') ?
		applyFilter(target) : 
		null
	}
)
