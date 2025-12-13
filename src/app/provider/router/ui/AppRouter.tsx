import { Route, Routes } from "react-router-dom";
import { routConfig } from "../routerConfig";
import { Suspense } from "react";
import { PageLoader } from "@/widgets";

export const AppRoutes = () =>{
    console.log("routerConfig = " ,routConfig); 
    return(
        <Routes>
            {routConfig.map(({path ,element})=>(
                <Route 
                key={path} 
                path={path} 
                element={<Suspense key={path} fallback={<PageLoader/>}>{element}</Suspense>}/>
            ))}
        </Routes>
    );
} 