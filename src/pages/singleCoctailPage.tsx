import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CoctailServices} from "../services";
import { ICoctailDetail} from "../interfaces/coctail.interfaces/coctail.interfaces";
import {Loader, SingleCoctail} from "../components";

const SingleCoctailPage: FC = () => {

    const {idDrink} = useParams();
    const [coctail, setCoctail] = useState<ICoctailDetail>();

    useEffect(() => {
        if (idDrink) {
            CoctailServices.getById(idDrink).then(({data}) => setCoctail(data.drinks[0]))
        }
    }, [idDrink])

    return (
        <div>
            {coctail ? <SingleCoctail coctailDetail={coctail}/> :<Loader/>}
        </div>
    );
};

export {SingleCoctailPage};