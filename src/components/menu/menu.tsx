import React, {FC, useState} from 'react';
import {drinkList} from "./drinkList";

import {useAppDispatch, useAppSelector} from "../../Hook";
import {coctailActions} from "../../redax";
import classes from "./menu.module.css";



const Menu: FC = () => {

const {content} = useAppSelector(state=>state.coctailReducer);
    const dispatch = useAppDispatch();
    const [value,setValue] = useState<string>('');

    const findCocteil = async (drink: string) => {
        dispatch(coctailActions.getByAlcName({i: drink}))
        dispatch(coctailActions.changeContent('byIngredient'))
    }

    return (
        <div className={ classes.wrapper}>
            <span className={content==='byIngredient'? classes.active : classes.btn} onMouseMove={()=>setValue('show')} >Search by ingredient</span>
            <ul className={value? classes.list : classes.close} onMouseLeave={()=>setValue('')}>
                {drinkList.map(item => <li key={item.strIngredient1}
                                           onClick={() => findCocteil(item.strIngredient1)}>{item.strIngredient1}</li>)}
            </ul>
        </div>
    );
};

export {Menu};