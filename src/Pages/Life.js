import Components from '../core/Component.js';

export default class Life extends Components {
    constructor(props) {
        super(props); // 추후에 하위로 컴포넌트를 런더링 할 때 필요한 부분
        this.initialState(); // 초기값 설정
    }

    async initialState() {
        this.setState({});
    }

    template() {
        return `
      <div class="container">
        <h1>Life</h1>
      </div>
    `;
    }

    componentDidMount() {}
}
