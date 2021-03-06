
import Component from '../core/Component.js';
import { decrease, increase } from '../modules/counter.js';

import { counterStore } from '../store.js';
import { $ } from '../utils/utils';

export default class Like extends Component {
    constructor(...rest) {
        super(...rest);
    }

    template() {
        //state ์กฐํ
        const { like } = counterStore.getState();

        return `
      <h2 class="counter">${like}</h2>
      <button class="like">๐</button>
      <button class="disLike">๐</button>
    `;
    }

    componentDidMount() {
        $('.like').addEventListener('click', () => counterStore.dispatch(increase()));
        $('.disLike').addEventListener('click', () => counterStore.dispatch(decrease()));
    }
}
