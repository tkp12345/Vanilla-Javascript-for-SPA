
import Component from '../core/Component.js';
import { decrease, increase } from '../modules/counter.js';

import { counterStore } from '../store.js';
import { $ } from '../utils/utils';

export default class Like extends Component {
    constructor(...rest) {
        super(...rest);
    }

    template() {
        //state 조회
        const { like } = counterStore.getState();

        return `
      <h2 class="counter">${like}</h2>
      <button class="like">👍</button>
      <button class="disLike">👎</button>
    `;
    }

    componentDidMount() {
        $('.like').addEventListener('click', () => counterStore.dispatch(increase()));
        $('.disLike').addEventListener('click', () => counterStore.dispatch(decrease()));
    }
}
