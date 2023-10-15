import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home/home.jsx";
import Register from "@/pages/register/register.jsx";
import Validator from "@/pages/validator/validator.jsx";
import {registerAction} from "@/routes/actions/registerAction.jsx";
import Products from "@/pages/products/products.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <Register/>,
        action : registerAction,
        errorElement : <Register />
    },
    {
        path: "/validate",
        element: <Validator/>
    },
    {
        path : "/products",
        element : <Products/>
    }
])

export default routes