import {ITEM_IMAGE_URL} from '../utils/constants'

const ItemsList = ({items}) => {
    console.log(items);
    return(
        <div className=''>
            {items.map((item) => (
                <div key = {item.card.info.id} className="text-left border-b-2 flex">
                    <div className="w-9/12 py-4">
                        <p className='font-semibold  text-slate-600'>{item.card.info.name}</p>
                        <p className='font-semibold'> ₹ {item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</p>
                        <p className='text-gray-700'>{item.card.info.description}</p>
                    </div>
                    
                    <div className="w-3/12">
                        
                            <img src={ITEM_IMAGE_URL + item.card.info.imageId} className='rounded m-2'/>
                        <div className='relative bottom-8 left-2'>
                            <button className='border rounded p-2 text-green-500  bg-white m-auto'>Add +</button>
                        </div>
                    </div>
                </div>
                
                
            ))}
        </div>
    )
    
}

export default ItemsList;