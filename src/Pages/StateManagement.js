import Components from '../core/Component';
import {counterStore} from "../store";
import {$} from "../utils/utils";
import {like, disLike} from "../modules/counter";

const constants={
    statementsTitle:'상태 변경',
    virtualDom:'가상돔 시연'
}

export default class StateManagement extends Components {
    constructor(...props) {
        super(...props); // 추후에 하위로 컴포넌트를 런더링 할 때 필요한 부분
        this.initialState(); // 초기값 설정
    }

    template() {
        //state 조회
        const { like } = counterStore.getState();
        return `
   <div class="container">
<!--        <section class="ranking"></section>-->
         <div class="contents">
         <ul>
          <div class="home_title">
             ${constants.statementsTitle}
          </div>
            <li class="item">
                <div class="main_section">
                 컴포넌트 상태 변경
                </div>
                 <div class="sub_section">
                      <span class="counter">${like}</span>
                       <button class="like">👍</button>
                      <button class="disLike">👎</button>
                 </div>
             </li>
         </ul>
        </div>
      </div>

    `;
    }

    componentDidMount() {
        $('.like').addEventListener('click', () => counterStore.dispatch(like()));
        $('.disLike').addEventListener('click', () => counterStore.dispatch(disLike()));
    }
}
