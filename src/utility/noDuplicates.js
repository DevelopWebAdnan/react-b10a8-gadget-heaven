console.log('Inside noDuplicates.js')

const noDuplicates = (categories) => {
   
    const gadgetsCategories = [];

    for (const gadgetsObj of categories) {
        // console.log('gadgetsObj from Categories', gadgetsObj);
        gadgetsCategories.push(gadgetsObj.category);
    }
    // console.log('gadgetsCategories', gadgetsCategories);
    const uniqueCategories = [];

    for (const singleGadgetCategory of gadgetsCategories) {
        // console.log('singleGadgetCategory: ', singleGadgetCategory);
        if (uniqueCategories.includes(singleGadgetCategory) === false) {
            uniqueCategories.push(singleGadgetCategory)
        }
    }
    return uniqueCategories;
}

export { noDuplicates }