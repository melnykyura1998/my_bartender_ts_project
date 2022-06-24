import React, {FC} from 'react';

import classes from "./loadeer.module.css";

const Loader:FC = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.loader}>
            </div>
        </div>
    );
};

export {Loader};