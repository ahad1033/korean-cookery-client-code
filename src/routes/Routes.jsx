import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/blogs/Blogs";
import Chefs from "../pages/chefs/Chefs";
import ChefRecipePage from "../pages/chefRecipePage/ChefRecipePage";
import RecipeDetails from "../pages/recipeDetails/RecipeDetails";

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
        element: <ChefRecipePage />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
        children: [
            
        ]
        
    }
])

export default router;