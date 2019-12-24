import React from 'react';

interface IProps{
    location: any
}
export default class Home extends React.Component<IProps,any> {
    render() {
        console.log(this.props.location.state);
        
        return (
            <div>
                <a>detail</a>
            </div>
        )
    }
}