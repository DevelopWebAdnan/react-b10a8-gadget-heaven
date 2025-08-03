import Gadget from '../Gadget/Gadget';
import { useLoaderData } from 'react-router-dom';

const Gadgets = () => {
    const data = useLoaderData();
    // console.log(data);
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;