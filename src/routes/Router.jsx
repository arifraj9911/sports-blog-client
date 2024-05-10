import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeaturedBlog from "../Pages/FeaturedBlog/FeaturedBlog";
import Wishlist from "../Pages/Wishlist/Wishlist";
import PrivateAuth from "../PrivateAuth/PrivateAuth";
import ViewDetailsBlog from "../Pages/ViewDetailsBlog/ViewDetailsBlog";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/add-blog',
                element:<AddBlog></AddBlog>
            },
            {
                path:'/all-blog',
                element:<AllBlog></AllBlog>
            },
            {
                path:'/all-blog/:id',
                element:<ViewDetailsBlog></ViewDetailsBlog>,
                loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path:'/featured-blog',
                element:<PrivateAuth><FeaturedBlog></FeaturedBlog></PrivateAuth>
            },
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])