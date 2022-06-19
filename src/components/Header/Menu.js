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
                            <li data-cm="life">
                            	<span>라이프</span>
							</li>
<!--                            <li data-cm="food">-->
<!--                            	<span>푸드</span>-->
<!--                            </li>-->
<!--                            <li data-cm="trip">-->
<!--								<span>여행</span>-->
<!--							</li>-->
<!--                            <li data-cm="culture">-->
<!--                            	<span>컬쳐</span>-->
<!--                           </li>-->
<!--                            <li data-cm="bookmark">-->
<!--                            	<span>즐겨찾기</span>-->
<!--                           </li>-->
                        </ul>
                    </div>
                    <div class="sub_menu">
                    <ul class="hub_link">
                    	<li data-sm="latest">
                    		<span>최근 읽은 글</span>
						</li>
						<li data-sm="channel">
							<span>채널</span>
						</li>
					</ul>
				</div>
			</div>
       </div>
    `;
    }
    async componentDidMount() {
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
