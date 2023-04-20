import { PageRoute } from "../app/types/routes";
import CityPage from "../pages/city";
import HomePage from "../pages/home";

export const routes = [
    {
        id:'home',
        name: 'Home',
        path: '/',
        element: HomePage,
        
    },
    {
        id:'city',
        name: 'City',
        path: '/city/:cityId',
        element: CityPage,
        
    }
] as PageRoute[];