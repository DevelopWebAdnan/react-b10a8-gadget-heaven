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

const addToStoredCart = (product_id) => {
    const storedCart = getStoredCart();
    if (storedCart.includes(product_id)) {
        // already exists. Do not add it
        console.log(product_id, 'already exists in the cart')
        toast('already exists in the cart')
    }
    else {
        storedCart.push(product_id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr);
        toast('This gadget is added to your cart.')
    }
}

const getStoredWishList = () => {
//     wish-list
    const storedWishListStr = localStorage.getItem('wish-list');

    if(storedWishListStr) {
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

export { addToStoredCart, addToStoredWishList, getStoredCart, getStoredWishList }