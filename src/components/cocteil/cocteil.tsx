import React, {FC} from 'react';
import {ICoctail} from "../../interfaces/coctail.interfaces/coctail.interfaces";
import classes from "./cocteil.module.css";
import {useNavigate} from "react-router-dom";
import {Loader} from "../loader/loader";
interface IProps{
    coctail:ICoctail
}
const Cocteil:FC<IProps> = ({coctail:{strDrink,strDrinkThumb,idDrink}}) => {

    const navigate = useNavigate();

    const toCoctail = ()=>{
       navigate(`/home/${idDrink}`)
    }
    return (
        <div>
            { strDrinkThumb? <div className={classes.card} onClick={toCoctail}>
                <img src={`${strDrinkThumb}`} alt={strDrink}/>
                <h3>{strDrink}</h3>
            </div>:<Loader/>}
        </div>
    );
};

export {Cocteil};