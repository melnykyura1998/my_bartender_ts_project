import React, {FC} from 'react';

import {Outlet, useLocation} from 'react-router-dom'
import {CocteilsAll,Menu,ByQuery,CocteilsByIngredient,Form} from "../components";
import {useAppDispatch, useAppSelector} from "../Hook";
import classes from "./coctailsPage.module.css";
import {coctailActions} from "../redax";


const Coctailpage: FC = () => {

    const {pathname} = useLocation();
    const {content} = useAppSelector(state => state.coctailReducer);
    const dispatch = useAppDispatch();

    return (
        <div>
            {pathname === '/home' ? <div>
                    <div className={classes.header}>
                        <Form/>
                        <Menu/>
                    </div>
                <hr style={{color:'black'}}/>
                    {content === 'All' ? <CocteilsAll/> :
                        <div className={classes.wrapper} onClick={() => dispatch(coctailActions.changeContent('All'))}>
                            <button className={classes.button}> show all</button>
                        </div>}
                    {content === 'byIngredient' && <CocteilsByIngredient/>}
                    {content === 'byQuery' && <ByQuery/>}

                </div> : <Outlet/>}
        </div>
    );
};

export {Coctailpage};