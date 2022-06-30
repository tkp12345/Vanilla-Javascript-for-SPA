import Components from '../core/Component';
import {counterStore} from "../store";
import {$} from "../utils/utils";
import {like, disLike} from "../modules/counter";

export default class StateManagement extends Components {
    constructor(...props) {
        super(...props); // 추후에 하위로 컴포넌트를 런더링 할 때 필요한 부분
        this.initialState(); // 초기값 설정
    }

    template() {
        //state 조회
        const { like } = counterStore.getState();
        console.log('like:',like)
        return `
      <h2 class="counter">${like}</h2>
      <button class="like">👍</button>
      <button class="disLike">👎</button>
    `;
    }

    componentDidMount() {
        $('.like').addEventListener('click', () => counterStore.dispatch(like()));
        $('.disLike').addEventListener('click', () => counterStore.dispatch(disLike()));
    }
}
