import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BoxSdk from '../sdk';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }
  componentDidMount()
  {
    let box = new BoxSdk();
    let AdminClient = new box.BasicBoxClient({accessToken: "KLrFZ02LFmNrknqMCaMfP3qAgc4Oy0SB"});
    AdminClient.groups.getAll()
    .then(function (memberships) 
    {
        console.log(memberships);
    })
    .catch(function(err)
    {
        console.log(err);
    });
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
