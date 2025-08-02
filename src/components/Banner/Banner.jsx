import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg';
import Heading from '../Heading/Heading';

const Banner = () => {
    return (
        <div className="hero bg-purple-600 h-[700px] rounded-b-4xl">
            <div className="mt-10 md:mt-11 lg:mt-12 hero-content flex-col text-center text-white">
                <div className="max-w-96 md:max-w-3xl lg:max-w-6xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <Heading subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
                    <Link to='dashboard'><button className="btn btn-xl text-purple-600 rounded-4xl py-4 px-8 mb-8 md:mb-12">Shop Now</button></Link>
                <img
                    src={bannerImg}
                    className=" rounded-4xl p-6 bg-white max-h-[610px] w-full object-cover"
                />
                </div>
            </div>
        </div>
    );
};

export default Banner;