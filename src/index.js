import { $ } from './utils/utils';

import App from './App.js';

new App($('#root'));

// import { $ } from './utils/utils';
// import App from './App.js';
//
// // css
// require('./index.css')
//
// // router
// const {
//     initialRoutes,
//     historyRouterPush,
//     hashRouterPush
// } = require('../router')
//
// new App($('#app'));
//
// // app division
// const historyAppDiv = document.querySelector('#history-app')
// const hashAppDiv = document.querySelector('#hash-app')
//
// console.log('🔥historyAppDiv:',historyAppDiv)
//
// // Browser History
// initialRoutes('history', historyAppDiv)
//
// // Hash History
// initialRoutes('hash', hashAppDiv)
// // const app = document.querySelector("#app");
// // const rendering = new App()
// // app.appendChild(rendering.$target)
// // rendering.render()
//
//
//
// // window.onload = () => {
// //
// //
// //
// //     // window.addEventListener('beforeunload', (event) => {
// //     //     event.preventDefault();
// //     // });
// // console.log(location.pathname);
// //     const historyLinker = document.querySelectorAll('span.history')
// //     const hashLinker = document.querySelectorAll('a.hash')
// //
// //     historyLinker.forEach(el => {
// //         //클릭시 돔의 route 요소를 가지고 history 함수 호출
// //         console.log('🔥el:',el);
// //         el.addEventListener('click', (evt) => {
// //             const pathName = evt.target.getAttribute('route')
// //             historyRouterPush(pathName, historyAppDiv)
// //         })
// //     })
// //
// //     // hashLinker.forEach(el => {
// //     //     el.addEventListener('click', (evt) => {
// //     //         const pathName = evt.target.getAttribute('route')
// //     //
// //     //         hashRouterPush(pathName, hashAppDiv)
// //     //     })
// //     // })
// // }