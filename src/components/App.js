import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BoxHelper from './Helper/BoxHelper';
import PageHeader from './Home/PageHeader';
import TableHeader from './Home/TableHeader';
import GroupContent from './Home/GroupContent';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }
  componentDidMount()
  {
    BoxHelper.IsTokenAvailable().then(data=>{
    });
  }
  render()
  {
    return (
      <div className="container bxPageWrapper">
        <PageHeader/>
        <TableHeader/>
        <GroupContent/>
      </div>
    );
  }
}

export default App;
