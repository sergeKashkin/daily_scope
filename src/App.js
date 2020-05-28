import React, { Component } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSign: 'sagittarius',
    }
  }
  render() {
  return (
    <div className="App">
        <Header />
        <Container currentSign={this.state.currentSign}/>
    </div>
  );
}
}

export default App;
