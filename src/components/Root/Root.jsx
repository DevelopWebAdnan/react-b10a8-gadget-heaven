
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    // const {pathname} = useLocation();
    // console.log(pathname);

    // const navbarBg = pathname === '/' ? "bg-purple-600" : "bg-white";

    return (
        <div className='max-w-7xl mx-auto sora-body'>
            {/* <div className='h-16'></div> */}
            <Navbar></Navbar>
            <div className='bg-base-200 mb-24'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;