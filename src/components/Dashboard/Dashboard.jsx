import Heading from '../Heading/Heading';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import AddedGadgets from '../AddedGadgets/AddedGadgets';

const Dashboard = () => {
    const allGadgets = useLoaderData();
    // console.log(allGadgets);

    return (
        <div>
            <title>Dashboard | Gadget Heaven</title>
            <div className="hero bg-purple-600">
                <div className="hero-content">
                    <div className="max-w-6xl">
                        <Heading title='Dashboard'></Heading>
                        <Heading subtitle='Here in the Dashboard you will find the gadgets you want to purchase and have added to the cart. Besides you will also find the gadgets you have added to the wishlist.'></Heading>
                    </div>
                </div>
            </div>
            <AddedGadgets allGadgets={allGadgets}></AddedGadgets>
        </div>
    );
};

export default Dashboard;