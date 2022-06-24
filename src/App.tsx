import React, {FC} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import './App.css'

import {MainLayout} from "./Layouts";
import {Coctailpage, SingleCoctailPage} from "./pages";
import {MyBarPage} from "./pages/MyBarPage";

// "start": "react-scripts start",

const App: FC = () => {



    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Coctailpage/>}>
                    <Route path={':idDrink'} element={<SingleCoctailPage/>}/>
                </Route>
                <Route path={'myCocktail'} element={<MyBarPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
