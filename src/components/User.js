import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increament Count
        </button>
        <h1>{count2}</h1>
        <h2>Name: {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {contact}</h2>
      </div>
    );
  }
}

export default User;
