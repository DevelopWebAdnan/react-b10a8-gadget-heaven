import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
import { addToStoredCart, addToStoredWishList, getStoredWishList } from '../../utility/addToCart';

const GadgetDetail = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    // console.log(typeof product_id, typeof id, typeof data[0].product_id);

    const gadgetDetail = data.find(gadget => gadget.product_id === id);

    const { product_id: currentProductId, product_image, product_title, price, availability, Specification, rating, description } = gadgetDetail;
    console.log('product_id, currentProductId, gadgetDetail: ', product_id, typeof product_id, currentProductId, typeof currentProductId, gadgetDetail, typeof gadgetDetail)

    const [gadget, setGadget] = useState({})
    console.log('gadget state from GadgetDetail: ', gadget)

    const [inWishList, setInWishList] = useState(false)

    const handleAddToCart = (product_id) => {
        console.log(product_id, typeof product_id, 'product_id from handleAddToCart in GadgetDetail');
        addToStoredCart(product_id);
    }

    const handleAddToWishList = (product_id) => {
        addToStoredWishList(product_id);
        setInWishList(true);
    }

    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == id);
        setGadget(singleData)
        const storedWishList = getStoredWishList()
        const isExist = storedWishList.find(id => id == singleData.product_id)
        if (isExist) {
            setInWishList(true)
        }
    }, [data, id])

    return (
        <div className="relative hero bg-purple-600 h-96 mb-48 md:mb-64 lg:mb-80">
            <div className="absolute top-3 md:top-4 lg:top-5 hero-content flex-col">
                <div className="max-w-6xl">
                    <Heading title='Product Details'></Heading>
                    <Heading subtitle='Explore the latest gadgets that fulfill the daily needs in details. From the image of the product to specification, add-to-cart button, it shows these in details.'></Heading>
                </div>
                <div className=" card lg:card-side bg-white">
                    <figure className='lg:max-w-md pt-8 px-8 lg:pr-0 lg:pb-8'>
                        <img
                            src={product_image}
                            alt={product_title}
                            className="h-full w-full rounded-2xl object-cover" />
                    </figure>
                    <div className="card-body">
                        <h3 className="font-semibold text-3xl">{product_title}</h3>
                        <h4 className='font-semibold text-xl mt-3 mb-4'>Price: {price}</h4>
                        <div><button className="btn btn-outline btn-accent btn-md bg-green-100 rounded-4xl">{availability == true ? "In Stock" : "Not In Stock"}</button></div>
                        <p className='mt-4 text-lg opacity-60'>{description}</p>
                        <h5 className="mt-4 mb-3 font-bold text-lg">Specification:</h5>
                        <ol type='1' className='flex-grow'>
                            {
                                Specification.map((SingleSpecification, index) =>
                                    <li key={index} className="text-lg opacity-60">{SingleSpecification}</li>
                                )
                            }
                        </ol>
                        <h5 className='mt-4 mb-3 font-bold text-lg'>Rating</h5>
                        <div className='flex items-center gap-4'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" aria-label="5 star" />
                            </div>
                            <button className="btn btn-soft btn-sm rounded-4xl">{rating}</button>
                        </div>
                        <div className="card-actions mt-4 flex gap-4">
                            <button onClick={() => handleAddToCart(product_id)} className="btn btn-lg font-bold rounded-4xl bg-purple-600 text-white">
                                Add To Card
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                            <button disabled={inWishList} onClick={() => handleAddToWishList(product_id)} className="btn btn-circle btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GadgetDetail;