import React from 'react';
import Login from './src/Pages/Login';
import MainPage from './src/Pages/MainPage';



export default class App extends React.Component { 
  constructor(props) {
    super(props); 
    this.handleSubmitName = this.onSubmitName.bind(this); 
    this.state = { 
      hasName: false
    };
  }


  onSubmitName(name) { 
    this.setState({
      name,
      hasName: true
    });
  }

  render() {
    if (this.state.hasName) {
      return (
        <MainPage name={ this.state.name } />
      );
    } else {
      return (
        <Login onSubmitName={ this.handleSubmitName } />
      );
    }
  }
}


