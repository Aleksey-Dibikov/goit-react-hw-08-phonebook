import { Navigate } from "react-router";

export function PublicRoute({isAuth, component: Component}) {
    return (
        <>
            {isAuth ? <Navigate to='/' /> : <Component />}
        </>
    );
};