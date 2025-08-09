import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page Not Found</h2 >
            <p>{err.data}</p>
        </div>
    )
}
export default Error;