import { NavLink } from 'react-router-dom';
import './Category.css';

const Category = ({ uniqueGadgetsCategories }) => {
    // const navigate = useNavigate()
    // console.log('uniqueGadgetsCategories props from Category.jsx', uniqueGadgetsCategories);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Category.jsx</h2>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Categories Sidebar
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-base-content w-60 p-6 rounded-2xl border border-black/10 text-lg relative top-16 lg:static">
                        {/* Sidebar content here */}
                        <li><NavLink to='/gadgets'>All Product</NavLink></li>
                            {
                                uniqueGadgetsCategories.map(uniqueGadgetCategory => (
                                    <li key={uniqueGadgetCategory}> <NavLink to={`/category/${uniqueGadgetCategory}`}>{uniqueGadgetCategory}</NavLink></li>
                                ))
                            }
                        {/* {
                            <li key={category.product_id}><Link to={`/category/${category.category}`}>{category.category}</Link></li>
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;