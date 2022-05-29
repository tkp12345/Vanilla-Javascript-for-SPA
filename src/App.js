import { $ } from './utils/utils.js';
import Component from './core/Component.js';
import { counterStore } from './store.js';

import { decrease, increase, setDiff } from './modules/counter.js'; // 액션 생성 함수 를 통해 액션 정의


export default class App extends Component{
    constructor(...rest){
        super(...rest);

        //구독 : 상태가 변하면 해당 컴포넌트를 렌더링
        counterStore.subscribe(this.render.bind(this));
    }

    template(){
        //상태 감지
        const {diff, number} = counterStore.getState();
        return `
      <div class="container">
        <h1>Counter</h1>
        <form class="setDiffForm">
          <input class="diffInput" type="number" placeholder="1" value="${diff}"/>
          <button class="diffSubmit" type="submit">diff 설정</button>
        </form> 
        <h2 class="counter">${number}</h2>
        <button class="increaseBtn">+1</button>
        <button class="decreaseBtn">-1</button>
      </div>
    `;
    }

    componentDidMount() {
        $('.increaseBtn').addEventListener('click', () => counterStore.dispatch(increase()));
        $('.decreaseBtn').addEventListener('click', () => counterStore.dispatch(decrease()));
        $('.setDiffForm').addEventListener('submit', this.handleChangeDiff);
    }

    handleChangeDiff(event) {
        event.preventDefault();

        const diff = $('.diffInput')?.value;
        if (!diff) return;

        counterStore.dispatch(setDiff(+diff));
    }
}