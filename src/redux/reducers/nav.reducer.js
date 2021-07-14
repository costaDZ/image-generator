
import { CHANGE_PAGE } from "../actions/actions";
import data from '../../data';

const initialState = data;


export const nav = (state = initialState, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case CHANGE_PAGE:
            console.log(state[payload], payload);
            return state;
        //break;
        default:
            console.log('woooooooorks', state);

            return state;
    }


}