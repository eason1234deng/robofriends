import { CHANGE_SEARCH_FIELD } from '../Constants/ActionConstants';

import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../Constants/MiddleWareConstants';

export const setSearchField = (searchText) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: searchText
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};