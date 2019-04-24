import * as React from "react";

export default class ContactInfo extends React.Component<any, any> {
    render() {
        return (
            <div onClick={this.props.onClick}>{this.props.contact.name}</div>
        )
    }
}