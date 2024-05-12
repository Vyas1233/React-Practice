import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <div className="">
            <h1>Oops..!!</h1>
            <h2>Something Went Wrong</h2>
            {/* <h3>{err.error}</h3> */}
        </div>
    )
}

export default Error;