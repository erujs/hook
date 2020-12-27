import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null,
    profileSummary: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA_SUMMARY:
                return {
                    ...state,
                    profileSummary: action.data,
                    status: 200
                };
        case actionTypes.SERVICE_DOWN:
            return {
                ...state,
                status: 503
            };
        case actionTypes.NO_RESPONSE:
            return {
                ...state,
                status: 204
            };
        default:
            return state;
    }
};

export default reducer;