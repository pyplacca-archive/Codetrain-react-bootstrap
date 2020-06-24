import React from 'react'
import { img_dir } from './data.js'


const numFormat = Intl.NumberFormat().format


class Product extends React.Component {

	render () {
		const { 
			discount, 
			image, 
			name, 
			quantity, 
			price, 
			tags 
		} = this.props

		return (
			<div 
				className="product" 
				tags={tags.join()}
			>
				{
					discount ? 
					<p className="discount-percent">
						{ '-' + discount + '%' }
					</p> : 
					''
				}
				
				<img 
					className="item-image" 
					src={img_dir + image} 
					alt={name} 
				/>
				
				<h5 
					className="item-name" 
					title={name}
				>
					{ name }
				</h5>
				
				<p className="item-quantity">
					{ quantity + ' pc' + (quantity > 1 ? 's' : '') }
				</p>
				
				<div className="item-checkout">
					<p 
						className="amount" 
						price-before={
							discount ? '$' + numFormat(price) : ''
						}
					>
						{'$' + numFormat(
							price - ((discount / 100) * price).toFixed() || 
							price
						)}
					</p>
				
					<p 
						className="add-to-cart" 
						style={{
							backgroundImage: "url('./assets/icons/shopping-bag.png')"
						}}
					>
						Cart
					</p>
				</div>
			</div>
		)
	}
}



function Category({name}) {
	const icn = name.replace(' ', '-').toLowerCase()
	const bg = `url("./assets/icons/${
		icn.endsWith('s') ? icn.substring(0, icn.length-1) : icn
	}.png")`

	return (
		<p 
			className="category" 
			filter-by={ name }
			style={{backgroundImage: bg}}
		>
			{ name }
		</p>
	)
}


export { Category, Product }
