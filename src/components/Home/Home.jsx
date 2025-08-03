import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div>
            <title>Gadgets | Gadget Heaven</title>
            <div className='mb-10 md:mb-96 lg:mb-80'>
                <Banner></Banner>
            </div>
            <h2 className="text-4xl font-bold text-center mb-6 md:mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex gap-6'>
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;