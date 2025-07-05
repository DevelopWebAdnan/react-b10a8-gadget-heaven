import React from 'react';
import Category from '../Category/Category';
import { noDuplicates } from '../../utility/noDuplicates';

const Categories = ({categories}) => {
    // console.log('categories from Categories.jsx: ', categories);
    // // const gadgetsData = useLoaderData();
    // console.log('gadgetsData from Categories.jsx', gadgetsData);
    // const data[5] =
    //     { product_id: 6, product_title: 'Acer Swift 3', product_image: 'https://i.ibb.co/WpqLDh42/austin-poon-JO-S6ew-Bq-Ak-unsplash.jpg', category: 'laptop', price: 699, … }

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