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
        <div className='m-2 p-2 w-56'>
            <img className='rounded-lg' src= { RESTRO_IMAGE_URL + cloudinaryImageId} />
            <h3 className='text-black font-bold py-3'>{name}</h3>
            <h4 className='text-slate-500'>{cuisines.join(", ")}</h4>
            <h4 className='text-slate-500'>{costForTwo}</h4>
            <h4 className='text-slate-500'>{avgRatingString} stars</h4>
            <h4 className='text-slate-500'>{deliveryTime} mins</h4>
        </div>
    )
}

/* Below is the Higher Order Component which is taking Restaurants component as input and adding Promoted Label on to it without modifying
the existing component */

export const WithPromotedLabel = (Restaurants) => {
    return(props) => {
        return(
            <div>
                <label className='absolute rounded bg-black text-white p-2 m-2'>Promoted</label>
                <Restaurants  {...props}/>
            </div>
        )
    }

}

export default Restaurants;