import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div className="hello" name={this.props.name}>
        Hello {this.props.name}
      </div>
    );
  }
}

export default Hello;