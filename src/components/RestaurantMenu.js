import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./RestaurantCategory";
const RestaurantMenu = () => {

const {resId} = useParams();
const [showIndex, setShowIndex] = useState(0);

const resInfo = useRestaurantMenu(resId)

   
    if(resInfo === null) return <Shimmer />

    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    const restaurantCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-xl">{name}</h1>
            <p className="text-lg font-semibold">{avgRating} - {costForTwoMessage}</p>
            <p className="text-lg text-gray-500 font-semibold">{cuisines.join(", ")}</p>
            <p className="text-lg text-gray-500 font-semibold">{areaName}</p>
            <p className="text-lg text-gray-500 font-semibold">{sla.slaString}</p>
            {/* <h2>Menu</h2> */}
            
            
            {restaurantCategories.map((category,index) => (
                <Restaurantcategory  key = {category?.card?.card.title} 
                data = {category?.card?.card}
                showCategoryItems = {index === showIndex ? true : false}
                setShowIndex = {()=> setShowIndex(index)}
                />
            ))}
            
        </div>

    )
}

export default RestaurantMenu;