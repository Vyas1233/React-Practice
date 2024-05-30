import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className='flex justify-between shadow-lg'>
            <div className='logo-container'>
                <img className='w-40' src= {LOGO_URL}></img>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-6">Status : {onlineStatus ? <span>Online &#128578;</span> : <span>Offline &#128577;</span> }</li>
                    <li className="px-6 hover:text-orange-400"><Link to="/">Home</Link></li>
                    <li className="px-6 hover:text-orange-400"><Link to="/about">About Us</Link></li>
                    <li className="px-6 hover:text-orange-400"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-6 hover:text-orange-400"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6 hover:text-orange-400"><Link to="/cart">Cart-({cartItems.length} items)</Link></li>
                    {btnName === 'Logout' && <li className="px-6 hover:text-orange-400 font-bold">{loggedInUser}</li>}
                    <button className="hover:text-orange-400" onClick={
                        () => {
                           btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')

                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )

}

export default Header