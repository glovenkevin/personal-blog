import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

import Home from '../pages/home';
import PageNotFound from '../pages/empty'

function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <PageNotFound />,
        }
    ])
    return (
        <RouterProvider router={router} ></RouterProvider>
    )
}

export default Routes;