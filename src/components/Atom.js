import React from 'react';

class Atom extends React.Component {
    render() {
        return (
            <div className={`atom ${this.props.name} a-${this.props.index}`}></div>
        );
    }
}

export default Atom;
