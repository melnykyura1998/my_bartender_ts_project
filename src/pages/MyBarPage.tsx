import React, {FC} from 'react';

import {useAppSelector} from "../Hook";
import {Cocteil} from "../components";
import classes from "../components/singleCoctail/singleCoctail.module.css";
import {useNavigate} from "react-router-dom";

const MyBarPage: FC = () => {

    const navigate = useNavigate();
    const {myBar} = useAppSelector(state => state.coctailReducer);

    return (
        <div>
            <div className={classes.wrapper}>
                <button className={classes.btn} onClick={() => navigate('/home')}>add coctail</button>
            </div>
            <div style={{display: "flex", justifyContent: 'center', flexWrap: 'wrap'}}>
                { myBar.map(coctail => <Cocteil coctail={coctail}
                                                                   key={coctail.idDrink}/>)}
            </div>
        </div>
    );
};

export {MyBarPage};