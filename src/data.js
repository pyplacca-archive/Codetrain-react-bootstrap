const categories = [
	'all products',
	'purse', 
	'hand bags', 
	'shoulder bags', 
	'wallet', 
	'laptop bags'
]

const [
	[, p, hb, sb, w, lb], 
	img_dir
] = [
	categories, 
	'./assets/images/'
]

const listings = [
	{
		name: 'Advent Laptop Bag',
		quantity: 5,
		price: 500,
		discount: 20,
		image: 'laptop-bags/advent.jpg',
		tags: [
			lb
		]
	},

	{
		name: 'Leatherology Bi-fold Wallet',
		quantity: 11,
		price: 280,
		discount: 5,
		image: 'wallets/vertical-bifold.jpg',
		tags: [
			w
		]
	},

	{
		name: 'Median Large - Tan Handbag',
		quantity: 1,
		price: 175,
		image: 'handbags/median-tan.jpg',
		tags: [
			hb
		]
	},

	{
		name: 'Victorine Wallet',
		quantity: 3,
		price: 780,
		discount: 13,
		image: 'wallets/victorine.jpg',
		tags: [
			w
		]
	},

	{
		name: 'McJolts Matte Shoulder Bag',
		quantity: 1,
		price: 370,
		discount: 10,
		image: 'shoulder-bags/matteyy.jpg',
		tags: [
			sb
		]
	},
	
	{
		name: 'Dolce F Laptop Bag',
		quantity: 2,
		price: 419,
		discount: 50,
		image: 'laptop-bags/chic-grey.jpg',
		tags: [
			lb
		]
	},
	
	{
		name: 'Dune London Handbag',
		quantity: 1,
		price: 1200,
		discount: 70,
		image: 'handbags/dune-london.jpg',
		tags: [
			hb
		]
	},
	
	{
		name: 'Groche Snoflake Wallet',
		quantity: 2,
		price: 650,
		discount: 8,
		image: 'wallets/snowflake.jpg',
		tags: [
			w
		]
	},
	
	{
		name: 'Chevron Blue Laptop Bag',
		quantity: 7,
		price: 300,
		image: 'laptop-bags/chevron-blue.jpg',
		tags: [
			lb
		]
	},
	
	{
		name: 'St. Jacobs Shoulder Bag',
		quantity: 13,
		price: 360,
		discount: 3,
		image: 'shoulder-bags/campy.jpg',
		tags: [
			sb
		]
	},

	{
		name: 'Ladies Large Purses Women’s Zip Around Purse / Wallet',
		quantity: 21,
		price: 11,
		image: 'purses/ladies-large-purse.jpg',
		tags: [
			p, w
		]
	},
]


export {
	img_dir,
	categories,
	listings
}	
