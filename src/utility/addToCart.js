import { toast } from "react-toastify";

const getStoredCart = () => {
    // cart
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoredCart = (currentProductId) => {
    const storedCart = getStoredCart();
    if (storedCart.includes(currentProductId)) {
        // already exists. Do not add it
        console.log(currentProductId, 'already exists in the cart')
        toast('already exists in the cart')
    }
    else {
        storedCart.push(currentProductId);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr);
        toast('This gadget is added to your cart.')
    }
}

// remove a gadget from local storage
const removeFromStoredCart = product_id => {
    console.log(product_id , 'product_id from removeFromStoredCart(product_id)');
    // get all previously saved gadget data
    const storedCart = getStoredCart();
    console.log(storedCart, 'storedCart from removeFromStoredCart(product_id)');
    const remaining = storedCart.filter(id => id != product_id)
    console.log(remaining, 'remaining from removeFromStoredCart(product_id)');
    localStorage.setItem('cart', JSON.stringify(remaining));
    toast('Successfully Removed!')
}

const getStoredWishList = () => {
    //     wish-list
    const storedWishListStr = localStorage.getItem('wish-list');

    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        console.log('WishList: ', storedWishList)
        return storedWishList;
    }
    else {
        console.log('WishList: ', [])
        return [];
    }
}

const addToStoredWishList = (product_id) => {
    // get all previously saved id of wish list
    const storedWishList = getStoredWishList();
    const isExist = storedWishList.find(id => id == product_id)
    if (isExist) return toast('Already exists in the wish list!')

    storedWishList.push(product_id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wish-list', storedWishListStr);
    toast('successfully added to wish list!')
}

export { addToStoredCart, addToStoredWishList, getStoredCart, getStoredWishList, removeFromStoredCart }