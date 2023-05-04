import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/blogs/Blogs";
import Chefs from "../pages/chefs/Chefs";
import ChefRecipePage from "../pages/chefRecipePage/ChefRecipePage";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Chefs />,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: '/chefRecipe/:id',
        element: <PrivateRoute><ChefRecipePage /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
        children: [
            
        ]
        
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router;