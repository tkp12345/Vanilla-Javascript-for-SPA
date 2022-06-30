import Components from '../core/Component.js';
import {counterStore} from "../store";

const constants={
    statementsTitle:'전역 상태관리 조회',
    virtualDom:'가상돔 시연'
}

export default class Home extends Components {
    constructor(props) {
        super(props); // 추후에 하위로 컴포넌트를 런더링 할 때 필요한 부분
    }

    template() {
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
                    상태관리 컴포넌트 렌더링 데이터
                </div>
                 <div class="sub_section">
                    전역 상태 좋아요 수 : ${like}
                 </div>
             </li>
           <div class="home_title">
             ${constants.virtualDom}
          </div>
            <li class="item">
                <div class="main_section">
                    가상돔 
                </div>
                 <div class="sub_section">
                 준비중입니다...
                 </div>
            </li>
          
  
         </ul>
</div>
      </div>
    `;
    }

    componentDidMount() {
        // new Ranking($('.ranking'))
    }

}
