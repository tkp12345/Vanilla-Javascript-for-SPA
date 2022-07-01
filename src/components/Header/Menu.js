import Components from '../../core/Component.js';
import router from '../../router';
import { $ } from '../../utils/utils';

export default class Menu extends Components {
    async initialState() {
        this.setState({});
    }

    template() {
        return `
            <div class="menu_wrap">
                <div class="inner">
                    <div class="category_menu">
                        <ul class="category_menu_ul">
                            <li class="on" data-cm="home">
                                <span>홈</span>
                            </li>
                            <li data-cm="stateManagement
                            ">
                            	<span>상태관리</span>
							</li>
							 <li data-cm="router">
                            	<span>라우터</span>
							</li>
							 <li data-cm="virtualDom">
                            	<span>가상돔</span>
							</li>
                        </ul>
                    </div>
                    <div class="sub_menu">
<!--                    <ul class="hub_link">-->
<!--                    	<li data-sm="latest">-->
<!--                    		<span>1</span>-->
<!--						</li>-->
<!--						<li data-sm="channel">-->
<!--							<span>2</span>-->
<!--						</li>-->
<!--					</ul>-->
				</div>
			</div>
       </div>
    `;
    }
    async componentDidMount() {
        //popstate 이벤트는 브라우저의 백 버튼이나 (history.back() 호출) 등을 통해서만 발생
        window.onpopstate = async () => {
            const view = await router();
            view && new view($('#app'));
        };

        $('.category_menu_ul').addEventListener('click', async event => {
            console.log(event);
            event.preventDefault();
            const { cm } = event.target.closest('li').dataset;
            const { pathname } = window.location;
            console.log(pathname);
            if (pathname === '/' + cm || (pathname === '/' && cm === 'home')) return;
            console.log(cm);
            window.history.pushState(null, '', cm === 'home' ? '/' : cm);

            const view = await router();
            view && new view($('#app'));
        });
    }
}
