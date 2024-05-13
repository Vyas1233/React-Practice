import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        console.log("User Constructor");
        super(props);
        this.state= {
            userInfo : "testUser"
        }
    }

    async componentDidMount() {
        console.log("User did mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo : json
        })

    }

    componentDidUpdate() {
        console.log("User did update");
    }

    componentWillUnmount() {
        console.log("User unMount");
    }
 
    render() {
        console.log("User render");
        const {name, location, twitter_username} = this.state.userInfo;
        
        return (
            <div className="user-card">
            <h2>Name : {name}</h2>
            <p>Location : {location}</p>
            <p>Contact : {twitter_username}</p>
        </div>

        )
    }

}

export default UserClass;