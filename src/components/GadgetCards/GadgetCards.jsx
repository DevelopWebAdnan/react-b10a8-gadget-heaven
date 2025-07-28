import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const GadgetCards = () => {
    const data = useLoaderData();

    const {uniqueGadgetCategory} = useParams()

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if(uniqueGadgetCategory) {
            const filteredByCategory = [...data].filter(gadgetCard => gadgetCard.category === uniqueGadgetCategory)
    
            setGadgets(filteredByCategory);
        }
        else {
            setGadgets(data.slice(0, 9))
        }

    }, [uniqueGadgetCategory, data])
    // console.log(data)

    return (
        <div>
            <p>GadgetCards.jsx...{uniqueGadgetCategory}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default GadgetCards;