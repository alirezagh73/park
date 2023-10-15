import {createBrowserRouter} from "react-router-dom";
import Detail from "@/pages/detail/detail.jsx";
import Register from "@/pages/register/register.jsx";
import Verify from "@/pages/verify/verify.jsx";
import {registerAction} from "@/routes/actions/registerAction.jsx";
import Products from "@/pages/products/products.jsx";

const routes = createBrowserRouter([
    {
        path: "/detail",
        element: <Detail/>
    },
    {
        path: "/register",
        element: <Register/>,
        action : registerAction,
        errorElement : <Register />
    },
    {
        path: "/verify",
        element: <Verify/>
    },
    {
        path : "/",
        element : <Products/>
    }
])

export default routes