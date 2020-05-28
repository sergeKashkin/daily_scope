import React, { Component } from 'react';
import Card from '../Card/Card';
import Change from '../Change/Change';
import './Container.css'


class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentSign:"change"
        }
    }

    changeSign = (sign) => {
        this.setState({currentSign:sign});
    }

    render() {
    return (
            <div className="grid-container">
                {this.state.currentSign === "change" ? <Change changeSign={this.changeSign}/> :
                <span><Card currentSign={this.state.currentSign} changeSign={this.changeSign}/></span>
                }
            </div>
    )
}
}

export default Container;