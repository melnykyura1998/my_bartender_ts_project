import {AxiosCervice, Res} from "./axios.cervice";
import {ICoctailDetail, IResponse} from "../interfaces/coctail.interfaces/coctail.interfaces";
import {urls} from "../constants";

export const CoctailServices = {
    getOneRandom:():Res<IResponse>=>AxiosCervice.get(urls.random),
    getByName:(s:string):Res<IResponse>=>AxiosCervice.get(urls.byName,{params: {s}}),
    getByAlcoValue:(a:string='Alcoholic'):Res<IResponse> => AxiosCervice.get(urls.alco,{params: {a}}),
    getByIngredient:(i:string):Res<IResponse> => AxiosCervice.get(urls.byIngredient,{params: {i}}),
    getById:(i:string):Res<{drinks:ICoctailDetail[]}> => AxiosCervice.get(urls.byId,{params:{i}})
}