import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';
// const aa =useHistory()
interface IProps {
    history: any
}
export default class Home extends React.Component<IProps, any> {
    public componentDidMount() {
        console.log(this.props);

    }
    public goDetail = () => {
        this.props.history.push({
            pathname: '/detail',
            state: {
                a: 1
            }
        } )
    }
    render() {
        return (
            <div>
                <a onClick={this.goDetail}> home</a>
            </div>
        )
    }
}