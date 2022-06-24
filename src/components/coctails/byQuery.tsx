import React, {FC} from 'react';

import { useAppSelector} from "../../Hook";
import {Cocteil} from "../cocteil/cocteil";
import classes from "./byQuery.module.css";
import {Loader} from "../loader/loader";

const ByQuery: FC = () => {

    const {cocteilByQuery} = useAppSelector(store => store.coctailReducer);

    return (
        <div>

            <div className={classes.wrapper}>
                {cocteilByQuery.length>0 ? cocteilByQuery.map(cocteil => <Cocteil coctail={cocteil}
                                                                         key={cocteil.idDrink}/>) : <Loader/>}
            </div>
        </div>
    );
};

export {ByQuery};