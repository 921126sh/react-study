import * as React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";

export default class Contact extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            },
            {
                name: 'Bbet',
                phone: '010-0000-0002'
            },
            {
                name: 'Cbet',
                phone: '010-0000-0003'
            },
            {
                name: 'Dbet',
                phone: '010-0000-00014'
            },
            {
                name: 'Ebet',
                phone: '010-0000-0005'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });

        console.log(key, 'is selected');
    }

    render() {
        const mapToComponents = (datas: Array<any>) => {
            datas.sort();
            datas = datas.filter((data: any) => {
                return !data.name.toLowerCase().indexOf(this.state.keyword);
            });

            return datas.map((contact, i) => {
                return (
                    <ContactInfo 
                        contact={contact} 
                        key={i}
                        onClick={() => this.handleClick(i)}

                />)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>

                <hr />
                <ContactDetails 
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                />
            </div>
        )
    }
}