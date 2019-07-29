import React from 'react';
 
class Name extends React.Component {
  render() {
    return (
      <div className="name">
      {this.props.name}
      </div>
    );
  }
}

export default Name;