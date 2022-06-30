export function createStore(reducer) {
    let state;
console.log('현재 state:',JSON.stringify(state))
    // 구독 내용을 관리 (렌더링 시켜줄 컴포넌트 담을 그릇)
    const listeners = new Set();
    console.log('현재 listeners:',JSON.stringify(listeners))

    // 현재 상태를 가져오기
    const getState = () => ({ ...state });

    //엑션 실행
    const dispatch = (action) => {
        state = reducer(state, action);
        // console.log('update state', state);
        console.log('state:',state)
        console.log('action:',action)
        publish();
    };
// state에 어떤 이벤트가 발생할 때 실행되어야하는 함수를 등록하는 함수입니다.
//한 마디로 변화를 감지하면 나에게도 알려달라고 구독하는 것입니다.
    // * fn : 컴포넌트
    const subscribe = (fn) => listeners.add(fn);

    // 상태가 변경되면(액션을 호출(dispatch)) 등록된 구독 내용(listeners) 을 수행하귀 위한 기능
    // 렌더링된다
    const publish = () => listeners.forEach((fn) => fn());

    return {
        getState,
        dispatch,
        subscribe,
    };
}