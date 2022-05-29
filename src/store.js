import { createStore } from './core/redux.js'; // redux

import countReducer from './modules/counter.js';

export const counterStore = createStore(countReducer);
//리듀서에서 존재하지 않은 액션은 default 값으로 빠지는데 state 에 default 파라미터를 설정해서 초기화
counterStore.dispatch(); // reudx에서 초기 데이터를 설정하기 위한 요청

// export { counterStore };