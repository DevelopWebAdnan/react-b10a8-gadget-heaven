
import { TiDeleteOutline } from 'react-icons/ti';

const Cart = ({ gadgetInCart, handleRemoveCart }) => {
    console.log(gadgetInCart)

    const { product_title, product_image, price, description, product_id } = gadgetInCart;
    console.log(product_id, typeof product_id, 'product_id from Cart');
    return (
        <div className='mb-3 md:mb-6'>
            <div className="card lg:card-side bg-white p-5">
                <figure className='lg:h-32 lg:w-52 mb-4 lg:mb-0'>
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h3 className="card-title text-2xl mb-3">{product_title}</h3>
                        <div className=' text-red-400 rounded-full cursor-pointer bg-amber-100' onClick={() => handleRemoveCart(product_id)}><TiDeleteOutline size={36} /></div>
                    </div>
                    <p className='mb-4 text-lg'>{description}</p>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;