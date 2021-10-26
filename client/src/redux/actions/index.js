import { LOGIN_OKEY, LOGOUT_OKEY } from "../types";
import axios from 'axios';

// export const loginUserAction = (user) => {
//    return async (dispatch)=>{
//       dispatch(setUser(user))
//    } 
// }
export const loginUserAction = (user) => ({
  type: LOGIN_OKEY,
  payload: user,
}); 
export const logOutUserAction = () => ({
  type: LOGOUT_OKEY,
});

// export const getRecipeAction = () => {
//    return async (dispatch) => {
//      dispatch(getRecipes());
//      try {
//        const recipes = await clienteAxios.get(`/recipes`);
//        // console.log(recipes.data, 'dataaa');
//        dispatch(getRecipesOKEY(recipes.data));
//      } catch (error) {
//        dispatch(getRecipesError(error.data));
//      }
//    };
//  };
//  const getRecipes = () => ({
//    type: GET_RECIPES,
//    payload: true,
//  });
//  const getRecipesOKEY = (recipes) => ({
//    type: GET_RECIPES_OKEY,
//    payload: recipes,
//  });
//  const getRecipesError = (error) => ({
//    type: GET_RECIPES_ERROR,
//    payload: error,
//  });

export function postUser(payload) {
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3001/juniors', payload)
    console.log(response)
    return response;
  }
};