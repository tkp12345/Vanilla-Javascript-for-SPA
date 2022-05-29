//엑션 정의
const INCRESE = 'INCREASE';
const DECREASE = 'DECREASE';
const SET_DIFF = 'SET_DIFF';

//엑션 생성 함수
export const increase = ()=>({type:INCRESE});
export const decrease = ()=>({type:DECRESE});
export const setDiff = (payload)=>({type:SET_DIFF, payload});

const initialState ={
    diff:1 ,
    number: 0,
}

// 리듀서 정의
export default function countReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
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