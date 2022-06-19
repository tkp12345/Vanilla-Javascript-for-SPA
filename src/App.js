import {$} from './utils/utils.js';
import Component from './core/Component.js';
import router from "./router";
import Header from "./components/Header/Header";


export default class App extends Component {
    constructor(...rest) {
        super(...rest);
    }

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
            const view = await router();
            view && new view($('#app'));
        };
        new Header($('#header'));
    }
}