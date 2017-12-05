/*
*	Cart with free shipping
*/

const sameOrder = {
	items: [
  	{
  	name: 'drageon', price: 900, quantity: 8
    },
    {
      name: 'ghost', price: 800, quantity: 2
    },
    {
      name: 'snake', price: 200, quantity: 3, shipping: true
    }
  ]
}

const orderTotal = order => {
	const totalItems = order.items
    .reduce(function (prev, cur) {
    	return prev + (cur.price * cur.quantity)
    }, 0)
  
  
  const shippingItem = order.items
  	.find(x => !!x.shipping)
    
  const shipping = totalItems > 1000 ? 0 : shippingItem.price
  return totalItems + shipping
}

orderTotal(sameOrder)

