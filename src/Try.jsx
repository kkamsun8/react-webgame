import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <div>
                <h1> 시도</h1>
                <li>
                  <b>{this.props.value}</b>  - {this.props.index}
                  <div>컨텐츠</div>
                  <div>컨텐츠1</div>
                  <div>컨텐츠2</div>
                  <div>컨텐츠3</div>
                </li>
            </div>
        );
    }
}

export default Try;
