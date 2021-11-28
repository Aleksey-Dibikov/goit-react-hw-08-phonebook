import { Navigate } from "react-router";

export function PrivateRoute({isAuth, component: Component}) {
    return (
        <>
            <h1>PRIVATE</h1>
            {isAuth ? <Component/> : <Navigate to='/Login' />}
            <Component />
        </>
    );
};