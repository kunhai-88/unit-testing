import React from 'react';
import Name from './name-component';
class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
        Hello  
        <Name name={this.props.name} />
      </div>
    );
  }
}

export default Hello;