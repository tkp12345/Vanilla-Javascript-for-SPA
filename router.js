// template
const homeTemplate = require('./src/Pages/home.hbs')
const aboutTemplate = require('./src/Pages/about.hbs')

const Home = homeTemplate()
const About = aboutTemplate()

const routes = {
    '/': Home,
    '/home': Home,
    '/about': About
}

// entry point
function initialRoutes (mode, el) {
    console.log('mode:',mode)
    console.log('el:',el)
    renderHTML(el, routes['/'])

    if (mode === 'history') {
        console.log('mode === \'history\'')
        window.onpopstate = () => renderHTML(el, routes[window.location.pathname])

    } else {
        window.addEventListener('hashchange', () => {
            return renderHTML(el, getHashRoute())
        })
    }
}

// set browser history
function historyRouterPush (pathName, el) {
    //주소만 변경
    if(window.location.pathname !== pathName) {
        window.history.pushState({}, pathName, window.location.origin + pathName)
        renderHTML(el, routes[pathName])
    }
}

// get hash history route
function getHashRoute () {
    let route = '/'

    Object.keys(routes).forEach(hashRoute => {
        if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
            route = routes[hashRoute]
        }
    })

    return route
}

// set hash history
function hashRouterPush (pathName, el) {
    renderHTML(el, getHashRoute())
}

// render
function renderHTML (el, route) {
    el.innerHTML = route
}

module.exports = {
    initialRoutes,
    historyRouterPush,
    hashRouterPush
}