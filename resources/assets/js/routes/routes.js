/**
 * Created by Sumit-Yadav on 06-10-2017.
 */
import Home from '../pages/home'
import Courses from '../pages/courses'
import Login from '../pages/login'
import Register from '../pages/register'
import NoMatch from '../pages/noMatch'
import Dashboard from '../pages/users/dashboard'
import AdminDashboard from '../pages/admin/dashboard'

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        admin: false,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        auth: false,
        admin: false,
        component: Home
    },
    {
        path: '/courses',
        exact: true,
        auth: false,
        admin: false,
        component: Courses
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        admin: false,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        admin: false,
        component: Register
    },
    {
        path: '/dashboard',
        exact: true,
        auth: true,
        admin: false,
        component: Dashboard
    },
    {
        path: '/admin/dashboard',
        exact: true,
        auth: true,
        admin: true,
        component: AdminDashboard
    },
    {
        path: '',
        exact: true,
        auth: false,
        admin: false,
        component: NoMatch
    }

];

export default routes;