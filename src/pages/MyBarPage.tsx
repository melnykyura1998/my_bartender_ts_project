import React, {FC} from 'react';

import {useAppSelector} from "../Hook";
import {Cocteil, Loader} from "../components";

const MyBarPage: FC = () => {

    const {myBar} = useAppSelector(state => state.coctailReducer);

    return (
        <div style={{display:"flex",justifyContent:'center',flexWrap:'wrap'}}>
            { myBar.length>0 ? myBar.map(coctail=><Cocteil coctail={coctail} key={coctail.idDrink}/>) : <Loader/>}
        </div>
    );
};

export {MyBarPage};