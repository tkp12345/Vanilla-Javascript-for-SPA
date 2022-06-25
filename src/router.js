import Home from "./Pages/Home";
import Life from "./Pages/Life";
import NotFound from "./Pages/NotFound";
import {$} from "./utils/utils";

/*********************************************************
 *  History Api 방식 으로 구현한 router
 *
 *********************************************************/
const router = async () => {
    //이동할 경로 배열
    const routes = [
        {path: '/', component: Home},
        {path: '/life' , component: Life},
    ];

    //렌더링할 현재 페이지 정보를 찾기
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