import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BoxHelper from './Helper/BoxHelper';
import PageHeader from './Home/PageHeader';
import TableHeader from './Home/TableHeader';
import GroupContent from './Home/GroupContent';
let moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Groups:[]
    };
  }
  componentDidMount() 
  {
    BoxHelper.IsTokenAvailable().then(data => {
      BoxHelper.adminClient = new BoxHelper.Box.BasicBoxClient({ accessToken: BoxHelper.adminToken });
      BoxHelper.userClient = new BoxHelper.Box.BasicBoxClient({ accessToken: BoxHelper.adminToken });
      BoxHelper.GetAdminUser().then(user=>{
        BoxHelper.userName = user;
        this.GetUserGroupCollection(user);
      });
    });
  }

  GetUserGroupCollection(userName)
  {
    BoxHelper.GetUserId(userName).then(user =>{
      if(user.login === userName && user.status === 'active')
      {
        BoxHelper.GetGroupMembershipsOfUser(user.id,"0","20").then(memberships=>{
          if(memberships.length > 0)
          {
            $.each(memberships,(membershipIndex,membership)=>{
              BoxHelper.GetGroupInfo(membership.group.id).then(groupInfo=>{
                let dt = moment(groupInfo.created_at);
                let groupPosition = this.state.Groups.length;
                if(membership.role === 'admin')
                {
                  this.AddGroupInfo(groupPosition,membership.group.name,groupInfo.description, membership.group.id, membership.id, membership.role, "", "", "", dt.format("DD MMM YYYY"), groupInfo.invitability_level, "", "");
                }
              });
            });
          }
        });
      }
    });
  }

  AddGroupInfo(rowId, groupName, groupDesc, groupId, membershipId, role, groupCreatedDate, groupInviteLevel)
  {
    let reactHandler = this;
    reactHandler.state.Groups.splice(0);
    let arrayvar = reactHandler.state.Groups.slice();
    arrayvar.push({"groupIndex": rowId,"groupName":groupName,"groupDesc":groupDesc,
                   "groupId":groupId,"membershipId":membershipId,"role":role,
                   "groupCreatedDate":groupCreatedDate,
                   "groupInviteLevel":groupInviteLevel});

    this.setState((prevState) => {
      // Important: read `prevState` instead of `this.state` when updating.
      return {Groups: prevState.Groups.push(arrayvar)}
    });

    var Groups = [...this.state.Groups, arrayvar];
    this.setState({Groups})
  }

  render() {
    return (
      <div className="container bxPageWrapper">
        <PageHeader />
        <TableHeader />
        {this.state.Groups.map(function(item,key)
          {
            return (<GroupContent groupInfo = {item} key={key}/>);
          },this)
        }
      </div>
    );
  }
}

export default App;
