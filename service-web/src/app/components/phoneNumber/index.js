import React, {Component} from 'react';
import {withRouter} from "react-router-dom";


class PhoneNumberComponent extends Component {
    render() {
        let callLink = `tel:${this.props.phoneNumber}`
        return (
            <div className = "phoneNumberContainer">
                {this.props.title} / {this.props.subTitle}
                <hr/>
                <div className="phoneNumber">
                    
                    <a href={callLink}> {this.props.phoneNumber}</a>
                </div>
            </div>
        )
    }
}

export const PhoneNumber = withRouter(PhoneNumberComponent)
