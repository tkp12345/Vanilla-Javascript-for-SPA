export default class Component {
    $target;
    props;
    state;

    constructor($target, props) {
        this.$target = $target;
        this.props = props;

        this.initialState();
    }

    // 초기화 인터페이스
    async initialState() {
        this.render();
    }

    //state 변경 인터페이스
    setState(newState) {
        this.state = newState;
        //state를 갱신하고 다시 dom 정의
        this.render();

        console.log('setState : ', this.state);
    }

    //컴포넌트  정의 인터페이스
    template() {
        return ``;
    }

    //dom 에 컴포넌트를 삽입 하는 인터페이스
    render() {
        this.$target.innerHTML = this.template();
        this.componentDidMount();
    }

    //컴포넌트 마운트 구간 ,초기화 작업이 이루어지는 인터페이스
    componentDidMount() {
    }
}