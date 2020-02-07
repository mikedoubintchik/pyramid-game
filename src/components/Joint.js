import React from 'react';

class Joint extends React.Component {
    render() {
        return (
            <div className={`joint-${this.props.direction} ${this.props.name} j-${this.props.index}`}></div>
        );
    }
}

export default Joint;
