import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getStoredCart, removeFromStoredCart } from '../../utility/addToCart';
import AddedGadget from '../AddedGadget/AddedGadget';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getTotalCost } from '../../utility/totalCost';

const AddedGadgets = ({ allGadgets }) => {
    const [gadgetsInCart, setGadgetsInCart] = useState([]);
    console.log(gadgetsInCart, 'gadgetsInCart state from AddedGadgets');

    const [totalCost, setTotalCost] = useState(0);

    // const handlePurchase = price => {}

    const handleSortByPrice = () => {
        const sorted = [...gadgetsInCart].sort((a, b) => b.price - a.price)
        setGadgetsInCart(sorted)
    }

    // const allGadgets = useLoaderData();

    useEffect(() => {
        const storedCart = getStoredCart();

        const storedCartInt = storedCart.map(product_id => parseInt(product_id));
        console.log(storedCart, storedCartInt, allGadgets);

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

    const handleRemove = product_id => {
        removeFromStoredCart(product_id);
        console.log(product_id, 'product_id from handleRemove(product_id)');

        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id))
        console.log(storedCart, storedCartInt);

        const gadgetsInCart = allGadgets.filter(gadget => storedCartInt.includes(gadget.product_id))

        setGadgetsInCart(gadgetsInCart)

        const totalCost = getTotalCost(gadgetsInCart)
        console.log('totalCost from AddedGadgets: ', totalCost)
        setTotalCost(totalCost)

    }


    return (
        <div>
            <Tabs>
                <TabList className="bg-purple-600 text-center">
                    <Tab className="btn btn-xl text-purple-600 rounded-4xl py-2 md:py-4 px-8 md:px-16 mb-6 md:mb-12 mr-3 md:mr-6">Cart</Tab>
                    <Tab className="btn btn-xl btn-outline text-white rounded-4xl py-2 md:py-4 px-8 md:px-16 mb-6 md:mb-12">Wishlist</Tab>
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
                            gadgetsInCart.map(gadgetInCart => <AddedGadget handleRemove={handleRemove} key={gadgetInCart.product_id} gadgetInCart={gadgetInCart}></AddedGadget>)
                        }
        
                    {/* <AddedGadgets allGadgets={allGadgets}></AddedGadgets> */}
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AddedGadgets;