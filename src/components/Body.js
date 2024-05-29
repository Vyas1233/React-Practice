import Restaurants, { WithPromotedLabel } from "./Restaurants"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const onlineStatus = useOnlineStatus();
    const RestaurantsWithPromotedLabel = WithPromotedLabel(Restaurants);

    useEffect(()=> {
        getRestaurants();
    },[]);

    const getRestaurants = async () => {
       const data = await fetch
       ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus === false) return <h1>Oops.. Seems You're Offline. Please check your Internet Connection</h1>

    const {loggedInUser, setUserName} = useContext(UserContext)
   
    return listOfRestaurants.length === 0 
    ? ( <Shimmer /> ) 
        : (
        <div className='body-container'>
            <div className='m-4 p-4 flex'>
                <div className="filter-restro">
                    <input type="text" className="border rounded border-solid border-black" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        let searchRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(searchRestaurants)
                    }} className="px-2 m-2 rounded-md border-2 border-stone-300">Search</button>
                </div>
                <button className="px-2 m-2 rounded-md border border-stone-300" onClick={() => {
                    let topRatedRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4);
                    setFilteredRestaurants(topRatedRestaurants)
                }}>Rated 4.0+</button>
                <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className='flex flex-wrap p-4'>
                {filteredRestaurants.map((data)=> (
                    <Link key = {data.info.id} to={"/restaurants/" + data.info.id}>
                        {data.info.promoted ? <RestaurantsWithPromotedLabel restaurantsData = {data}/> 
                        : <Restaurants restaurantsData = {data} />}
                        
                    </Link>
                ))}
                
            </div>
        </div>
    )

}

export default Body
