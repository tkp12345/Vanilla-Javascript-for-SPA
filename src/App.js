import { $ } from './utils/utils.js';
import Component from './core/Component.js';
import { counterStore } from './store.js';
import Counter from './components/Counter.js';
import InputDiff from './components/InputDiff.js';


export default class App extends Component {
    constructor(...rest) {
        super(...rest);
    }

    template() {
        return `
      <h1>Counter</h1>
      <section class="diff-form-component"></section>
      <section class="counter-component"></section>
    `;
    }

    componentDidMount() {
        const newInput = new InputDiff($('.diff-form-component'));
        const counter = new Counter($('.counter-component'));

        counterStore.subscribe(() => {
            newInput.render(), counter.render();
        });
    }
}