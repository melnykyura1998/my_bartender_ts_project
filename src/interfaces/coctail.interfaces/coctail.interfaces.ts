export interface ICoctail {
    strDrink:string,
    strDrinkThumb:string,
    idDrink:string
}
export interface IResponse {
    drinks:ICoctail[]
}
export interface ICoctailDetail{
    idDrink:string
    strDrink: string
    strDrinkThumb: string
    strAlcoholic: string
    strCategory: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strInstructions:string
}