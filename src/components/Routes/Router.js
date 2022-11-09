import { createBrowserRouter } from "react-router-dom";
import Addservice from "../AddService/Addservice";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/login',
                element:<Login></Login>
                
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/addservice',
                element:<Addservice></Addservice>
            }
        ]
    }
])

export default router;