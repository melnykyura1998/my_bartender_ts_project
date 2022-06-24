import React, {FC} from 'react';

import {useAppSelector} from "../../Hook";
import {Cocteil} from "../cocteil/cocteil";
import classes from "./byQuery.module.css";
import {Loader} from "../loader/loader";

const CocteilsByIngredient:FC = () => {
    const {byAlco} = useAppSelector(state => state.coctailReducer);
    return (
        <div className={classes.wrapper}>
            {byAlco.length>0?byAlco.map(cocteil => <Cocteil coctail={cocteil} key={cocteil.strDrink}/>):<Loader/>}
        </div>
    );
};

export {CocteilsByIngredient};