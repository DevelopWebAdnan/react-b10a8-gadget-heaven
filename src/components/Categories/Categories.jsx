import React from 'react';
import Category from '../Category/Category';
import { noDuplicates } from '../../utility/noDuplicates';

const Categories = ({categories}) => {

    // const gadgetsData = useLoaderData();
    // console.log('gadgetsData from Categories.jsx', gadgetsData);

    const uniqueGadgetsCategories = noDuplicates(categories);
    // console.log('uniqueGadgetsCategories: ', uniqueGadgetsCategories);

    // const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Categories.jsx</h2>
            {
                <Category categories={categories} uniqueGadgetsCategories={uniqueGadgetsCategories}></Category>
            }
        </div>
    );
};

export default Categories;