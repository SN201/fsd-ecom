import HomePage from "@/pages/Home/ui/HomePage";
import { LoginPage } from "@/pages/login";
import { NotFoundPage } from "@/pages/NotFound";
import { routePaths , AppRoutes } from "@/shared/config";
import type {RouteObject } from "react-router"


export const routConfig:RouteObject [] = [
{
    path: routePaths[AppRoutes.HOME],
    element : <HomePage/> ,
},
{
    path: routePaths[AppRoutes.LOGIN],
    element : <LoginPage/> ,
},
{
    path: routePaths[AppRoutes.NOT_FOUND],
    element : <NotFoundPage/> ,
},
];