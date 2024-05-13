import React from "react"
import User from "./User"
import UserClass from "./UserClass"

// const About = () => {
//     return (
//         <div className="about-us">
//             <h1>About Us</h1>
//             <h3>Welcome to About Us page</h3>
//             {/* <User 
//                 name="vyas (Function)"
//                 location = "Hyderabad"
//                 contact = "test@gmail.com"
//             /> */}
//             <UserClass />
//         </div>
// )
// }

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("About constructor");
    }

    componentDidMount() {
        console.log("About component did mount");
    }

    componentDidUpdate() {
        console.log("About component did update");
    }

    componentWillUnmount() {
        console.log("About unMount");
    }
    render() {
        console.log("Abput render");
        return(

            <div className="about-us">
             <h1>About Us</h1>
             <h3>Welcome to About Us page</h3>
             {/* <User 
                name="vyas (Function)"
                location = "Hyderabad"
                contact = "test@gmail.com"
            /> */}
            <UserClass />
         </div>

        )
    }

}

export default About

/* 
    - Abput constructor
    - About render
    - User Constructor
    - User render
    - user did mount
    - about did mount
    - user render
    - user did update

*/