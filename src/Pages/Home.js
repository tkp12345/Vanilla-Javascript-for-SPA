import Components from '../core/Component.js';

export default class Home extends Components {
    constructor(props) {
        super(props); // 추후에 하위로 컴포넌트를 런더링 할 때 필요한 부분
    }


    template() {
        return `
      <div class="container">
<!--        <section class="ranking"></section>-->
      </div>
    `;
    }

    componentDidMount() {
        // new Ranking($('.ranking'))
    }

}
