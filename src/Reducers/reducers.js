import { CHANGE_SEARCH_FIELD } from '../Constants/ActionConstants';
import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../Constants/MiddleWareConstants';

const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state=initialStateSearch /* state before action */, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: []
};
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false, error: '' };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false };
        default:
            return state;
    }
};