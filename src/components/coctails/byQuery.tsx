import React, {FC} from 'react';

import { useAppSelector} from "../../Hook";
import {Cocteil} from "../cocteil/cocteil";
import classes from "./byQuery.module.css";


const ByQuery: FC = () => {

    const {cocteilByQuery} = useAppSelector(store => store.coctailReducer);

    return (
        <div>

            <div className={classes.wrapper}>
                {cocteilByQuery ? cocteilByQuery.map(cocteil => <Cocteil coctail={cocteil}
                                                                         key={cocteil.idDrink}/>) : <h1>Not found</h1>}
            </div>
        </div>
    );
};

export {ByQuery};