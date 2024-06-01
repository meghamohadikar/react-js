import User from './User';
import { Component } from 'react';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor');
  }

  componentDidMount() {
    //can be use to make API call
    console.log('Parent Did Mount');
  }

  render() {
    console.log('Parent Render');

    return (
      <div>
        <h1> About Us</h1>
        <h3> This Is Menu's Food Delivery App</h3>
        <User name="Megha" location="Nagpur" contact="@mmohadik12" />
        <User name="Megha1" location="Nagpur1" contact="@mmohadik121" />
      </div>
    );
  }
}

export default AboutUs;

/*
- Parent constructor
- Parent Render

  (RENDER PHASE)
  - Child Constructor
  -  Child Render
  - Child Constructor
  - Child Render

  (COMMIT PHASE)
  - Child Did Mount
  - Child Did Mount

- Parent Did Mount
*/
