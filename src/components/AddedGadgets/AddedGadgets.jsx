import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getStoredCart, getStoredWishList, removeFromStoredCart, removeFromStoredWishList } from '../../utility/addToCart';
import AddedGadget from '../AddedGadget/AddedGadget';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getTotalCost } from '../../utility/totalCost';
import WishList from '../WishList/WishList';
import Cart from '../Cart/Cart';

const AddedGadgets = ({ allGadgets }) => {
    const [gadgetsInCart, setGadgetsInCart] = useState([]);

    const [gadgetsInWishList, setGadgetsInWishList] = useState([]);

    console.log(gadgetsInCart, gadgetsInWishList, 'gadgetsInCart, gadgetsInWishList states from AddedGadgets');

    const [totalCost, setTotalCost] = useState(0);

    // const handlePurchase = price => {}

    const handleSortByPrice = () => {
        const sorted = [...gadgetsInCart].sort((a, b) => b.price - a.price)
        setGadgetsInCart(sorted)
    }

    // const allGadgets = useLoaderData();

    const handleRemoveCart = product_id => {
        removeFromStoredCart(product_id);
        console.log(product_id, typeof product_id, 'product_id from handleRemoveCart(product_id)');

        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id))
        console.log('storedCart: ', storedCart, typeof storedCart, 'storedCartInt: ', storedCartInt, typeof storedCartInt);

        const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id))
        console.log('gadgetsInCart: ', gadgetsInCart, typeof gadgetsInCart)

        setGadgetsInCart(gadgetsInCart)

        const totalCost = getTotalCost(gadgetsInCart)
        console.log('totalCost from AddedGadgets: ', totalCost)
        setTotalCost(totalCost)
    }

    const handleRemoveWishList = product_id => {
        removeFromStoredWishList(product_id);
        console.log(product_id, typeof product_id, 'product_id from handleRemoveWishList(product_id)');

        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        console.log('storedWishList: ', storedWishList, typeof storedWishList, 'storedWishListInt: ', storedWishListInt, typeof storedWishListInt);

        const gadgetsInWishList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id))
        console.log('gadgetsInWishList: ', gadgetsInWishList, typeof gadgetsInWishList);

        setGadgetsInWishList(gadgetsInWishList)
    }

    useEffect(() => {
        const storedCart = getStoredCart();

        const storedCartInt = storedCart.map(product_id => parseInt(product_id));
        console.log('storedCart: ', storedCart, typeof storedCart, 'storedCartInt: ', storedCartInt, typeof storedCartInt, 'allGadgets: ', allGadgets);

        const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id));

        setGadgetsInCart(gadgetsInCart);

        const gadgetsInCartPrices = gadgetsInCart.map(gadgetInCart => gadgetInCart.price)
        console.log('gadgetsInCartPrices: ', gadgetsInCartPrices)

        // const gadgetInCartPrice = gadgetsInCartPrices.map(gadgetInCartPrice => gadgetInCartPrice)
        // console.log('gadgetInCartPrice from AddedGadgets: ', gadgetInCartPrice)

        const totalCost = getTotalCost(gadgetsInCart)
        console.log('totalCost from AddedGadgets: ', totalCost)
        setTotalCost(totalCost)

    }, [allGadgets])

    useEffect(() => {
        const storedWishList = getStoredWishList();

        const storedWishListInt = storedWishList.map(product_id => parseInt(product_id))

        console.log('storedWishList: ', storedWishList, typeof storedWishList, 'storedWishListInt: ', storedWishListInt, typeof storedWishListInt, 'allGadgets: ', allGadgets);

        const gadgetsInWishList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));

        setGadgetsInWishList(gadgetsInWishList);

    }, [allGadgets])


    return (
        <div>
            <Tabs>
                <TabList className="bg-purple-600 text-center text-lg mb-6 md:mb-12">
                    <Tab>Cart</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Gadgets in cart: {gadgetsInCart.length}</h2>
                    <div className='flex justify-between items-center mb-4 md:mb-8'>
                        <h4 className='text-2xl font-bold'>Cart</h4>
                        <div className='flex gap-3 md:gap-6 items-center'>
                            <h4 className='text-2xl font-bold'>Total Cost: {totalCost}</h4>
                            <div className='flex gap-2 md:gap-4'>
                                <button onClick={() => handleSortByPrice()} className='btn btn-lg btn-outline text-purple-600 font-semibold rounded-4xl'>Sort by Price</button><button className='btn btn-lg font-medium rounded-4xl bg-purple-600 text-white'>Purchase</button>
                            </div>
                        </div>
                    </div>
                        {
                            gadgetsInCart.map(gadgetInCart => <Cart handleRemoveCart={handleRemoveCart} key={gadgetInCart.product_id} gadgetInCart={gadgetInCart}></Cart>)
                        }
        
                    {/* <AddedGadgets allGadgets={allGadgets}></AddedGadgets> */}
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Gadgets in wishlist: {gadgetsInWishList.length}</h2>
                    {/* <div className='flex justify-between items-center mb-4 md:mb-8'></div> */}
                        <h4 className='text-2xl font-bold mb-4 md:mb-8'>WishList</h4>
                        {
                            gadgetsInWishList.map(gadgetInWishList => <WishList handleRemoveWishList={handleRemoveWishList} key={gadgetInWishList.product_id} gadgetInWishList={gadgetInWishList}></WishList>)
                        }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AddedGadgets;