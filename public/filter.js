const temp_storage = []

document.getElementById('sidebar').addEventListener(
	'click', 
	({target}) => {
		if (target.classList.contains('category')) {
			applyFilter(target)
		}
	}
)


const container = document.getElementById('product-list')
const counter = new DOMParser().parseFromString(
	'<span class="counter"></span>',
	'text/html'
).body.firstElementChild


function applyFilter(elm) {
	const cls = 'filter-active'
	// first remove class name from previous element...
	const previous = document.querySelector('.' + cls)
	if (previous) {
		previous.classList.remove(cls)
	}
	// then append it to the selected category...
	elm.classList.add(cls)
	// then filter listed items
	filterItems(elm.getAttribute('filter_name'), elm)
}

function filterItems(category, sender) {
	if (category !== 'all products') {
		// retrieve any item that belongs to the selected category from temp_storage
		temp_storage.reduce((arr, elt, i) => {
			if (elt.getAttribute('tags').includes(category)) {
				container.appendChild(elt)
			} else {
				arr.push(elt)
			}
			return arr
		}, []);
		// then removes the ones that don't belong to the selected category from the container (product-list)
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
