console.log('Inside totalCost.js')
// const gadgetsInCartTotalCost = gadgetsInCartPrices;
const getTotalCost = (gadgetsInCart) => {
    let total = 0;
    for (const gadgetInCart of gadgetsInCart) {
        console.log('gadgetInCart: ', gadgetInCart)
        total = total + gadgetInCart.price;
        console.log(total);
    }
    return total;
}

export { getTotalCost }