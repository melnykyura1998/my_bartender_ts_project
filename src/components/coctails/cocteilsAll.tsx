import React, {FC, useEffect, useState} from 'react';

import {useAppSelector, useAppDispatch} from "../../Hook";
import {coctailActions} from "../../redax";
import {Cocteil} from "../cocteil/cocteil";
import classes from "./byQuery.module.css";
import {Loader} from "../loader/loader";



const CocteilsAll: FC = () => {

    const {coctailsAlco, coctailNoAlco} = useAppSelector(state => state.coctailReducer);
    const [alcoValue, setAlcoValue] = useState<string>('Alcoholic');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (coctailsAlco.length === 0) {
            dispatch(coctailActions.getByAlcoValue({a: 'Alcoholic'}))
        }else if(coctailNoAlco.length === 0){
            dispatch(coctailActions.getByAlcoValue({a: 'Non_Alcoholic'}))
        }
        dispatch(coctailActions.changeContent('All'))
    }, [alcoValue,coctailNoAlco,coctailsAlco,dispatch])


    return (
        <div >
            <div className={classes.wrapper}>
                <button className={alcoValue ==='Alcoholic' ? classes.active : classes.button} onClick={() => setAlcoValue('Alcoholic')}>Alcoholic</button>
                <button className={alcoValue ==='Non_Alcoholic' ? classes.active : classes.button} onClick={() => setAlcoValue('Non_Alcoholic')}>No Alcohol</button>
            </div>
            <div className={classes.wrapper } style={{marginTop:'0'}}>
                {alcoValue === 'Alcoholic' && (coctailsAlco.length>0 ? coctailsAlco.map(coctail => <Cocteil key={coctail.strDrink} coctail={coctail}/>) : <Loader/>)}
            </div>
            <div className={classes.wrapper} style={{marginTop:'0'}}>
                {alcoValue==='Non_Alcoholic' &&  (coctailNoAlco.length>0 ? coctailNoAlco.map(coctail => <Cocteil key={coctail.strDrink} coctail={coctail}/>) : <Loader/>)}
            </div>
        </div>
    );
};

export {CocteilsAll};