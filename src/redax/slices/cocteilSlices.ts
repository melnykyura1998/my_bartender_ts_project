import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICoctail, IResponse} from "../../interfaces/coctail.interfaces/coctail.interfaces";
import {CoctailServices} from "../../services";


interface IInitialState {
    coctailsAlco: ICoctail[],
    coctailNoAlco: ICoctail[]
    byAlco: ICoctail[],
    content: string,
    cocteilByQuery:ICoctail[],
    myBar: ICoctail[]
}


const initialState: IInitialState = {
    coctailsAlco: [],
    byAlco: [],
    content: 'All',
    coctailNoAlco: [],
    cocteilByQuery:[],
    myBar: []

}
const getByAlcoValue = createAsyncThunk<IResponse, { a: string }>(
    'cocteilSlices/getByAlcoValue',
    async ({a}) => {
        const {data} = await CoctailServices.getByAlcoValue(a)
        return data
    }
);
const getByAlcName = createAsyncThunk<IResponse, { i: string }>(
    'cocteilSlices/getByAlcName',
    async ({i}) => {
        const {data} = await CoctailServices.getByIngredient(i)
        return data
    }
);
const getByName = createAsyncThunk<IResponse, { s: string }>(
    'cocteilSlices/getByName',
    async ({s}) => {
        const {data} = await CoctailServices.getByName(s)
        console.log(data)
        return data
    }
);

const cocteilSlices = createSlice({
    name: 'cocteilSlices',
    initialState,
    reducers: {
        changeContent: (state, actions) => {
            state.content = actions.payload
        },
        myBar:(state,actions)=>{
            const {coctail} = actions.payload
            state.myBar.push(coctail)
        }

    },
    extraReducers: (builder => {
        builder
            .addCase(getByAlcoValue.fulfilled, (state, action) => {
                const {drinks} = action.payload
                if (drinks[0].strDrink === '1-900-FUK-MEUP') {
                    state.coctailsAlco = drinks
                } else {
                    state.coctailNoAlco = drinks
                }

            })
            .addCase(getByAlcName.fulfilled, (state, action) => {
                const {drinks} = action.payload
                state.byAlco = drinks
            })
            .addCase(getByName.fulfilled, (state, action) => {
                const {drinks} = action.payload
                state.cocteilByQuery = drinks
                console.log(drinks)
            })
    })
});
const {reducer: coctailReducer, actions: {changeContent,myBar}} = cocteilSlices;
const coctailActions = {
    getByAlcoValue,
    getByAlcName,
    changeContent,
    getByName,
    myBar
}
export {coctailReducer, coctailActions}