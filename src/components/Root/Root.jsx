
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
   
    return (
        <div className='max-w-7xl mx-auto sora-body'>
            <Navbar></Navbar>
            <div className='bg-base-200 mb-24'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;