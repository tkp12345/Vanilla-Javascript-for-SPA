import Components from '../../core/Component.js';
import Menu from './Menu';
import '../../style/header.css';
import {$} from "../../utils/utils";
import LOGO from "../../../src/img/Logo.png"

export default class Header extends Components {
    async initialState() {
        console.log(LOGO)

        this.setState({});
    }
    template() {
        return `
        <div id="header">
            <div class="header_wrap">
                <div class="inner">
                    <h1>
<!--                        <img src="http://localhost:3000/96aebfd39a50cdba11fa.png" width="auto" height="80px"  alt="logo">-->
                        <img src=${LOGO} width="auto" height="80px"  alt="logo">
                    </h1>
                    <div class="search_box">
                        <div class="gnb">
                            <ul class="gnb_service"></ul>
                            <div class="gnb_login">
                                <span>로그인</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu"></div>
        </div>
    `;
    }

    async componentDidMount() {
        new Menu($('#menu'));
    }
}
