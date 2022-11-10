import { createBrowserRouter } from "react-router-dom";
import Addservice from "../AddService/Addservice";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import MyReviews from "../MyReviews/MyReviews";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://eleventh-assignment-server-pi.vercel.app/threeservices')
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
                loader:()=>fetch('https://eleventh-assignment-server-pi.vercel.app/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params})=>fetch(`https://eleventh-assignment-server-pi.vercel.app/services/${params.id}`)
            },
            {
                path:'/addservice',
                element:<PrivateRoute><Addservice></Addservice></PrivateRoute>
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/blogs',
                element:<BlogPage></BlogPage>
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;