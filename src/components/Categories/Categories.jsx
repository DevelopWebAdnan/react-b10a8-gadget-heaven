import Category from '../Category/Category';
import { noDuplicates } from '../../utility/noDuplicates';

const Categories = ({categories}) => {

    const uniqueGadgetsCategories = noDuplicates(categories);
  
    return (
        <div>
            {
                <Category categories={categories} uniqueGadgetsCategories={uniqueGadgetsCategories}></Category>
            }
        </div>
    );
};

export default Categories;