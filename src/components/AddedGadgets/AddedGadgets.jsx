import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getStoredCart, getStoredWishList, makeCartEmpty, removeFromStoredCart, removeFromStoredWishList } from '../../utility/addToCart';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getTotalCost } from '../../utility/totalCost';
import WishList from '../WishList/WishList';
import Cart from '../Cart/Cart';
import modalImg from '../../assets/Group.png';
import { useNavigate } from 'react-router-dom';

const AddedGadgets = ({ allGadgets }) => {
    const [gadgetsInCart, setGadgetsInCart] = useState([]);

    const [gadgetsInWishList, setGadgetsInWishList] = useState([]);

    const [totalCost, setTotalCost] = useState(0);

    const [cartIsEmpty, setCartIsEmpty] = useState(false);
    console.log('cartIsEmpty', cartIsEmpty)

    const handleSortByPrice = () => {
        const sorted = [...gadgetsInCart].sort((a, b) => b.price - a.price)
        setGadgetsInCart(sorted)
    }

    const handleRemoveCart = product_id => {
        removeFromStoredCart(product_id);

        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id))

        const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id))
        // console.log('gadgetsInCart: ', gadgetsInCart, typeof gadgetsInCart)

        setGadgetsInCart(gadgetsInCart)

        const totalCost = getTotalCost(gadgetsInCart)
        // console.log('totalCost from AddedGadgets: ', totalCost)
        setTotalCost(totalCost)

        if (Object.keys(gadgetsInCart).length === 0 && totalCost === 0) {
            setCartIsEmpty(true)
        }
    }

    const handleRemoveWishList = product_id => {
        removeFromStoredWishList(product_id);

        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id))
      
        const gadgetsInWishList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id))
        
        setGadgetsInWishList(gadgetsInWishList)
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        
        const storedCartInt = storedCart.map(product_id => parseInt(product_id));
        // console.log('storedCart: ', storedCart, typeof storedCart, 'storedCartInt: ', storedCartInt, typeof storedCartInt);
        
        const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id));
        
        setGadgetsInCart(gadgetsInCart);
        
        const totalCost = getTotalCost(gadgetsInCart)
        // console.log('totalCost from AddedGadgets: ', totalCost)
        setTotalCost(totalCost)
        
        if (Object.keys(gadgetsInCart).length === 0 && totalCost === 0) {
            setCartIsEmpty(true)
        }
    }, [allGadgets])

    useEffect(() => {
        const storedWishList = getStoredWishList();

        const storedWishListInt = storedWishList.map(product_id => parseInt(product_id))

        const gadgetsInWishList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));

        setGadgetsInWishList(gadgetsInWishList);

    }, [allGadgets])

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/', {replace: true});
        makeCartEmpty();
        // console.log('gadgetsInCart from handleClose()', gadgetsInCart)
    }

    
    return (
        <div>
            <Tabs>
                <TabList className="bg-purple-600 text-center text-lg mb-6 md:mb-12">
                    <Tab>Cart</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Gadgets in cart: {gadgetsInCart.length}</h2>
                    <div className='md:flex md:justify-between md:items-center mb-4 md:mb-8'>
                        <h4 className='text-2xl font-bold'>Cart</h4>
                        <div className='flex gap-3 md:gap-6 items-center'>
                            <h4 className='text-2xl font-bold'>Total Cost: {totalCost}</h4>
                            <div className='md:flex md:gap-2 lg:gap-4'>
                                <button onClick={() => handleSortByPrice()} className='btn btn-lg btn-outline text-purple-600 font-semibold rounded-4xl'>Sort by Price</button><button disabled={cartIsEmpty} onClick={() => document.getElementById('customModal').showModal()} className='btn btn-lg font-medium rounded-4xl bg-purple-600 text-white'>Purchase</button>
                            </div>
                        </div>
                    </div>
                    {
                        gadgetsInCart.map(gadgetInCart => <Cart handleRemoveCart={handleRemoveCart} key={gadgetInCart.product_id} gadgetInCart={gadgetInCart}></Cart>)
                    }
                </TabPanel>
                <TabPanel>
                    <h4 className='text-2xl font-bold mb-4 md:mb-8'>WishList</h4>
                    {
                        gadgetsInWishList.map(gadgetInWishList => <WishList handleRemoveWishList={handleRemoveWishList} key={gadgetInWishList.product_id} gadgetInWishList={gadgetInWishList}></WishList>)
                    }
                </TabPanel>
            </Tabs>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="customModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <img src={modalImg} className='w-16 mx-auto' alt="" />
                    <h3 className="font-bold text-2xl my-6">Payment Successful</h3>
                    <p className="font-medium">Thanks for purchasing</p>
                    <p className=" font-medium">Total: {totalCost}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleClose()} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddedGadgets;