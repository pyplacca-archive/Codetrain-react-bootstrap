import React from 'react'
import { dir_src } from './data.js'


const numFormat = Intl.NumberFormat().format


class Product extends React.Component {
	render () {
		const {discount, image, name, quantity, pre_price } = this.props
		const price = pre_price - ((discount / 100) * pre_price).toFixed()

		return (
			<div className="product">
				{
					discount ? <p className="discount-percent">{discount + '%'}</p> : ''
				}
				
				<img className="item-image" src={dir_src + image} alt={name} />
				
				<h5 className="item-name">
					{
						name.length > 32 ? 
						name.substr(0, 29) + '...' : 
						name 
					}
				</h5>
				
				<p className="item-quantity">
					{quantity + 'pc' + (quantity > 1 ? 's' : '')}
				</p>
				
				<div className="item-checkout">
					<p 
						className="amount" 
						price-before={discount ? '$' + numFormat(pre_price) : ''}
					>
						${numFormat(price || pre_price)}
					</p>
				
					<p 
						className="add-to-cart" 
						style={{backgroundImage: "url('./assets/icons/shopping-bag.png')"}}
					>
						Cart
					</p>
				</div>
			</div>
		)
	}
}



function Category({name}) {
	const icn = name.split(' ').join('-').toLowerCase()
	const bg = `url("./assets/icons/${
		icn.endsWith('s') ? icn.substring(0, icn.length-1) : icn
	}.png")`

	return (
		<p 
			className="category" 
			style={{backgroundImage: bg}}
		>
			{name}
		</p>
	)
}


export { Category, Product }
