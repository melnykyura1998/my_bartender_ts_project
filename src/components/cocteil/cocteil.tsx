import React, {FC} from 'react';
import {ICoctail} from "../../interfaces/coctail.interfaces/coctail.interfaces";
import classes from "./cocteil.module.css";
import {useNavigate} from "react-router-dom";
interface IProps{
    coctail:ICoctail
}
const Cocteil:FC<IProps> = ({coctail:{strDrink,strDrinkThumb,idDrink}}) => {

    const navigate = useNavigate();

    const toCoctail = ()=>{
       navigate(`/home/${idDrink}`)

    }
    return (
        <div className={classes.card} onClick={toCoctail}>
            <img src={`${strDrinkThumb}`} alt={strDrink}/>
            <h3>{strDrink}</h3>
        </div>
    );
};

export {Cocteil};