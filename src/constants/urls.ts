const baseURL = process.env.REACT_APP_API
// const baseURL = 'www.thecocktaildb.com/api/json/v1/1'
export default baseURL
export const urls = {
    byName:'/search.php',
    alco: '/filter.php',
    byIngredient: '/filter.php',
    random:'random.php',
    byId:'lookup.php'
}