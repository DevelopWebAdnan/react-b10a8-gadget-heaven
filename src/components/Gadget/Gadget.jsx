import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price, product_id } = gadget;

    return (
        <div className="card bg-base-100 w-96 lg:w-full shadow-sm p-5">
            <figure className="h-44 mb-4">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl h-full w-full object-cover" />
            </figure>
            <div className="">
                <h2 className="card-title mb-4">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions mt-4">
                    <Link to={`/gadgets/${product_id}`}><button className="btn btn-lg btn-outline text-purple-600 font-semibold rounded-4xl">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;