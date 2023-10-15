import {RouterProvider} from "react-router-dom";
import routes from "@/routes/routes.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <RouterProvider router={routes}/>
            <ToastContainer rtl={true}/>
        </>
    )
}

export default App
