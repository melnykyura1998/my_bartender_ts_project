import React, {FC, useState} from 'react';

import {useAppDispatch} from "../../Hook";
import {coctailActions} from "../../redax";
import classes from "./form.module.css";

const Form:FC = () => {
    const [name, setName] = useState<string>('');
    const dispatch = useAppDispatch();
    const search = async () => {
        dispatch(coctailActions.getByName({s: name}))
        dispatch(coctailActions.changeContent('byQuery'))
        setName('')
    }

    return (
        <div className={classes.form}>
            <input type="text" placeholder={'coctail name'} value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <button onClick={search}>search</button>
        </div>
    );
};

export {Form};