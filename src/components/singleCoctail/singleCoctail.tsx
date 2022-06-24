import React, {FC} from 'react';
import {ICoctail, ICoctailDetail} from "../../interfaces/coctail.interfaces/coctail.interfaces";
import classes from "./singleCoctail.module.css";
import {useAppDispatch} from "../../Hook";
import {coctailActions} from "../../redax";


interface IProps {
    coctailDetail: ICoctailDetail
}

const SingleCoctail: FC<IProps> = ({coctailDetail}) => {

    const {
        strDrinkThumb,
        idDrink,
        strDrink,
        strCategory,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strInstructions,
        strAlcoholic
    } = coctailDetail



    const coctail: ICoctail = {idDrink, strDrink, strDrinkThumb}

    const dispatch = useAppDispatch();

    return (
        <div className={classes.wrapper}>

            <div>
                <h1>{strDrink}</h1>
                <img src={`${strDrinkThumb}`} alt={`${strDrink}`}/></div>
            <div>
                <button className={classes.btn} onClick={() => dispatch(coctailActions.myBar({coctail}))}> add to my
                    bar
                </button>
                <div className={classes.detail}>
                    <b>{strAlcoholic}</b>
                    <b>{strCategory}</b>
                    <b>Ingredients:</b> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}
                    <b>Instruction:</b>{strInstructions}
                </div>
            </div>
        </div>

    );
};

export {SingleCoctail};