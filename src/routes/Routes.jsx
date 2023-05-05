import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/blogs/Blogs";
import Chefs from "../pages/chefs/Chefs";
import ChefRecipePage from "../pages/chefRecipePage/ChefRecipePage";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Chefs />,
                loader: () => fetch('https://korean-cookery-server-ahad1033.vercel.app/categories')
            }
        ]
    },
    {
        path: '/chefRecipe/:id',
        element: <PrivateRoute><ChefRecipePage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://korean-cookery-server-ahad1033.vercel.app/categories/${params.id}`),
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
    },
    {
        path: '/blogs',
        element: <Blogs />
    }
])

export default router;