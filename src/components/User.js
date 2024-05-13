import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1> Count : {count}</h1>
            <h1> Count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <p>Location : {location}</p>
            <p>Contact : {contact}</p>
        </div>
    )
}

export default User;