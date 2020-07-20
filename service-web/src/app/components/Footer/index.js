import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './style.css'


class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <nav className="footer__block footer__block--menu">
                        <div className="footer__column footer__column_left">
                            <a className="footer__menu--item" href="/privacy">Privacy</a> 
                            <a className="footer__menu--item" href="/TOS">Terms of service</a>
                            <a className="footer__menu--item footer__menu--mr" href="mailto:legal@iskanje.co.uk" target="blank">Legal</a> 
                        </div>
                        <div className="footer__column footer__column_right">
                            <div className = "footer__menu--mr"><a className="footer__menu--item" href="mailto:contact@iskanje.co.uk">Contact Us</a></div>
                            <p className="footer__menu--item footer__menu--settings">© {new Date().getFullYear()} Iskanje. All Rights Reserved.</p>
                        </div>
                    </nav>
                </footer>
            </div>
        )
    }
}

export const Footer = withRouter(FooterComponent);
