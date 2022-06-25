import {$} from './utils/utils.js';
import Component from './core/Component.js';
import router from "./router";
import Header from "./components/Header/Header";


export default class App extends Component {
    constructor(...rest) {
        super(...rest);
    }

    //state 초기화
    async initialState() {
        this.setState({});
    }

    template() {
        return `
    <div class="container">
        <section id="header"></section>
        <section id="app"></section>
      </div>
    `;
    }

    async componentDidMount() {
        window.onload = async () => {
            const View = await router();
            console.log('view:',View);
            View && new View($('#app'));
        };
        new Header($('#header'));
    }
}