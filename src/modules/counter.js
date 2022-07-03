const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const SET_DIFF = 'SET_DIFF';

export const like = () => ({ type: LIKE });
export const disLike = () => ({ type: DISLIKE });
export const setDiff = (payload) => ({ type: SET_DIFF, payload });

export const initialState = {
    diff: 1,
    like: 0,
};

export default function countReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LIKE:
            return {
                ...state,
                like: state.like + state.diff,
            };
        case DISLIKE:
            return {
                ...state,
                like: state.like - state.diff,
            };
        case SET_DIFF:
            return {
                ...state,
                diff: action.payload,
            };
        default:
            return state;
    }
}
