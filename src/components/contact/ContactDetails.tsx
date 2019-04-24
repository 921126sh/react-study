import * as React from 'react'

export interface AppProps { }

export default class ContactDetails extends React.Component<any, any> {
    static defaultProps: { contact: { name: string; phone: string; }; };

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        const blank = (<div>Not Selected</div>);

        return (
            <div>
                {this.props.isSelected ? details : blank}
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
};