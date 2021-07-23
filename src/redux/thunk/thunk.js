// import {
//     loadImagesSuccess,
//     loadImagesInProgress
// } from '../actions/actions.js';



// export const loadImages = () => async (dispatch, images) => {

//     try {
//         console.log('----------------------------Thunk');
//         //  dispatch(loadImagesInProgress());
//         const key = '21671638-6421320cf24dcaf0da0369488';
//         const url = 'https://pixabay.com/api/'

//         const response = await fetch(url + '?key=' + key);
//         const images = await response.json();
//         //  dispatch(loadImagesSuccess(images));

//     } catch (error) {
//         console.log(error);
//     }

// }