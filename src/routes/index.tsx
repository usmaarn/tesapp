import {createBrowserRouter} from 'react-router-dom';
import Login from '@/pages/login';
import ErrorPage from '@/ErrorPage';
import Dashboard from '@/pages/dashboard';
import User from '@/pages/user';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/dashboard/users/:user",
        element: <User />
    }
])

export default router;