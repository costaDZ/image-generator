
import { CHANGE_PAGE } from "../actions/actions";
import data from '../../data/data.js';

const initialState = data;


export const nav = (state = initialState, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case CHANGE_PAGE:
            console.log('-------------', payload);
            const targetData = initialState[payload] || initialState["main"];
            return targetData;
        //break;
        default:
            return state;
    }


}