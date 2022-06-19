import Components from '../core/Component.js';

export default class NotFound extends Components {
    constructor(props) {
        super(props);
        this.initialState();
    }

    async initialState() {
        this.setState({});
    }
    template() {
        return `
      <h1>페이지 오류</h1>
    `;
    }
}
