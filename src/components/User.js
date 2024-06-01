import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'nagpur',
        blog: 'mmmohadik@12',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount'); // try to go contactus page
  }

  render() {
    const { name, location, blog, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {blog}</h2>
      </div>
    );
  }
}

export default User;
