import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const WishList = ({ gadgetInWishList, handleRemoveWishList }) => {
    console.log(gadgetInWishList);

    const { product_title, product_image, price, description, product_id } = gadgetInWishList;
    console.log(product_id, typeof product_id, 'product_id from WishList');

    // const handleAddToCart = (product_id) => {
    //     console.log(product_id, typeof product_id, 'product_id from handleAddToCart in WishList');
    //     addToStoredCart(product_id);
    // }

    return (
        <div className='mb-3 md:mb-6'>
            <div className="card lg:card-side bg-white p-5">
                <figure className='lg:h-48 lg:w-72 mb-4 lg:mb-0'>
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h3 className="card-title text-2xl mb-3">{product_title}</h3>
                        <div className=' text-red-400 text-4xl rounded-full cursor-pointer bg-amber-100' onClick={() => handleRemoveWishList(product_id)}><TiDeleteOutline /></div>
                    </div>
                    <p className='mb-4 text-lg'>{description}</p>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-lg font-semibold rounded-4xl bg-purple-600 text-white">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;