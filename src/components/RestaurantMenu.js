import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId)

   
    if(resInfo === null) return <Shimmer />

    const {name, cuisines, areaName, avgRating, costForTwoMessage, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <p>{avgRating} - {costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p>{sla.slaString}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(items => 
                    <li key={items.card.info.id}>{items.card.info.name} - Rs.{items.card.info.defaultPrice/100 || items.card.info.price/100}</li>)}
                
            </ul>
        </div>

    )
}

export default RestaurantMenu;