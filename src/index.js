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

console.log('historyAppDiv:',historyAppDiv)

// Browser History
initialRoutes('history', historyAppDiv)

// Hash History
initialRoutes('hash', hashAppDiv)

window.onload = () => {

    // window.addEventListener('beforeunload', (event) => {
    //     history.go(window.location.pathname)
    //     event.preventDefault();
    // });

    const historyLinker = document.querySelectorAll('span.history')
    const hashLinker = document.querySelectorAll('a.hash')

    console.log('historyLinker:',historyLinker)
    console.log('hashLinker:',hashLinker)

    historyLinker.forEach(el => {

        //클릭시 돔의 route 요소를 가지고 history 함수 호출
        el.addEventListener('click', (evt) => {
            console.log('🔥evt:',evt);
            const pathName = evt.target.getAttribute('route')

            historyRouterPush(pathName, historyAppDiv)
        })
    })

    hashLinker.forEach(el => {
        el.addEventListener('click', (evt) => {
            const pathName = evt.target.getAttribute('route')

            hashRouterPush(pathName, hashAppDiv)
        })
    })
}