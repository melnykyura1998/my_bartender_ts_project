import React, {FC} from 'react';
import {NavLink,Outlet} from "react-router-dom";
import classes from "./mainLayouts.module.css";

const MainLayout:FC = () => {
    return (
        <div>
            <div className={classes.navbar}>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'myCocktail'}>My bar</NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export {MainLayout};