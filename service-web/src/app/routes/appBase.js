import React, {Component} from 'react';
import {Route, withRouter, Switch} from "react-router-dom";
import {HomeScreenContainer} from "../container/homeContainer";
import {SearchScreenContainer} from "../container/searchContainer";
import {NotFoundScreenContainer} from "../container/notFoundContainer";
// import {PrivacyPolicyContainer} from "../container/privacyScreenContainer";
import {PrivacyPolicyScreenContainer} from "../container/PrivacyPolicyContainer"
import {TOSContainer} from "../container/termsAndServiceContainer";
import {isMobile} from "../utils";
class AppBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            isMobile: isMobile()
        }
    }

    componentDidUpdate(prevProps) {}

    render() {
        return (
            <section className="main-section">
                <Switch>
                    <Route exact path="/" component={HomeScreenContainer}/>
                    <Route path="/search" component={SearchScreenContainer}/>
                    <Route path="/notfound" component={NotFoundScreenContainer}/>
                    <Route path="/privacy" component={PrivacyPolicyScreenContainer}/>
                    <Route path="/TOS" component={TOSContainer}/>
                    <Route component={NotFoundScreenContainer}/>
                </Switch>
            </section>
        );
    }
}

export default withRouter(AppBase);
