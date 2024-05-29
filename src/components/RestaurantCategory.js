import { useState } from "react";
import ItemsList from "./ItemsList";

const Restaurantcategory = ({data, showCategoryItems, setShowIndex}) => {
    // const [showCategoryItems, setShowCategoryItems] = useState(true)
    const showCategoriesHandler = () => {
        setShowIndex();
        // setShowCategoryItems(!showCategoryItems)
    }
    return(
        <div className="">
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
                <div className="flex justify-between cursor-pointer" onClick={showCategoriesHandler}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="font-semibold">v</span>
                </div>
                <div>
                   {showCategoryItems && <ItemsList items = {data.itemCards}/>}
                </div>
            </div>
            
           
        </div>
    )
}


export default Restaurantcategory;