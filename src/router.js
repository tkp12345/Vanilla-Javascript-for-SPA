import Home from "./Pages/Home";
import Life from "./Pages/Life";
import NotFound from "./Pages/NotFound";
import {$} from "./utils/utils";

const router = async () => {
    //이동할 경로
    const routes = [
        {path: '/', component: Home},
        {path: '/life' , component: Life},
    ];

    const pageMatches = routes.map(route =>{
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find(page => page.isMatch);

    if(match){
        return match.route.component;
    }else{
        new NotFound($('#root'));
    }
};

export default router;