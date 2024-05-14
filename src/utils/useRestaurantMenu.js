import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
   
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        
        fetchMenu();

    }, [])

    const fetchMenu = async () => {
        let data = await fetch(MENU_API + resId );
        let json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;