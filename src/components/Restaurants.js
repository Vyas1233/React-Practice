import {RESTRO_IMAGE_URL} from '../utils/constants'
const Restaurants = (props) => {
    const {restaurantsData} = props
    const {cloudinaryImageId, 
            name, 
            cuisines, 
            costForTwo, 
            avgRatingString } = restaurantsData?.info;

    const {deliveryTime} = restaurantsData?.info?.sla
    
    return (
        <div className='restro-card'>
            <img className='restro-logo' src= { RESTRO_IMAGE_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default Restaurants;