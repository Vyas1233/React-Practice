import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearCartHandler= () => {
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-2 p-2">
            <h1>Cart</h1>
            <button className="rounded-lg border bg-orange-400 text-white hover:shadow-md p-2 m-2" onClick={clearCartHandler}>Clear Cart</button>
            <div className=" w-6/12 mx-auto my-2 p-2">
                {cartItems.length===0 &&
                 <>
                    <h1 className="text-slate-600 font-semibold text-xl">Your cart is empty</h1>
                    <p className="text-slate-500">You can go to home page to view more restaurants</p>
                </>}
                <ItemsList items={cartItems} />
            </div>
           
        </div>
    )
}

export default Cart;