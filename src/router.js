import Home from "./Pages/Home";
import StateManagement from "./Pages/StateManagement";
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
        {path: '/stateManagement' , component: StateManagement},
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
        //매치된 컴포넌트 리턴
        return match.route.component;
    }else{
        new NotFound($('#root'));
    }
};

export default router;