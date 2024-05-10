import Restaurants from "./Restaurants"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(()=> {
        getRestaurants();
    },[]);

    const getRestaurants = async () => {
       const data = await fetch
       ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

   
    return listOfRestaurants.length === 0 
    ? ( <Shimmer /> ) 
        : (
        <div className='body-container'>
            <div className='search'>
                <div className="filter-restro">
                    <input type="text" className="filter-restro-input" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        let searchRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(searchRestaurants)
                    }}>Search</button>
                </div>
                <button className="filter-top-rated-btn" onClick={() => {
                    let topRatedRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4);
                    setFilteredRestaurants(topRatedRestaurants)
                }}>Rated 4.0+</button>
            </div>
            <div className='restro-container'>
                {filteredRestaurants.map((data)=> (
                    <Restaurants key = {data.info.id} restaurantsData = {data} />
                ))}
                
            </div>
        </div>
    )

}

export default Body
