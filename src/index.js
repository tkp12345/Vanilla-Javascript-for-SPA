// css
require('./index.css')

// router
const {
    initialRoutes,
    historyRouterPush,
    hashRouterPush
} = require('../router')

// app division
const historyAppDiv = document.querySelector('#history-app')
const hashAppDiv = document.querySelector('#hash-app')

import App from './App.js';


console.log('🔥historyAppDiv:',historyAppDiv)

// Browser History
initialRoutes('history', historyAppDiv)

// Hash History
initialRoutes('hash', hashAppDiv)
// const app = document.querySelector("#app");
// const rendering = new App()
// app.appendChild(rendering.$target)
// rendering.render()
import { $ } from './utils/utils.js';








new App($('#app'));

// window.onload = () => {
//
//
//
//     // window.addEventListener('beforeunload', (event) => {
//     //     event.preventDefault();
//     // });
// console.log(location.pathname);
//     const historyLinker = document.querySelectorAll('span.history')
//     const hashLinker = document.querySelectorAll('a.hash')
//
//     historyLinker.forEach(el => {
//         //클릭시 돔의 route 요소를 가지고 history 함수 호출
//         console.log('🔥el:',el);
//         el.addEventListener('click', (evt) => {
//             const pathName = evt.target.getAttribute('route')
//             historyRouterPush(pathName, historyAppDiv)
//         })
//     })
//
//     // hashLinker.forEach(el => {
//     //     el.addEventListener('click', (evt) => {
//     //         const pathName = evt.target.getAttribute('route')
//     //
//     //         hashRouterPush(pathName, hashAppDiv)
//     //     })
//     // })
// }