import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import BoxHelper from '../Helper/BoxHelper';
import PageHeader from './Home/PageHeader';
import TableHeader from './Home/TableHeader';
import GroupRow from './Home/GroupRow/GroupRow';
import $ from 'jquery';
import 'react-perfect-scrollbar/dist/css/styles.css';
import CreateGroup from './Home/Create Group/CreateGroup';
import Loader from './Home/Loader';
import * as courseActions from '../actions/groupActions';
let moment = require('moment');

class App extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      Groups:[],
      IsLoading:"none",
      GroupLoaded:[]
    };
  }
  componentDidMount() 
  {
    BoxHelper.OnReadyJqueryFunctions();    
    BoxHelper.IsTokenAvailable().then(data => {
      BoxHelper.adminClient = new BoxHelper.Box.BasicBoxClient({ accessToken: BoxHelper.adminToken });
      BoxHelper.userClient = new BoxHelper.Box.BasicBoxClient({ accessToken: BoxHelper.adminToken });
      BoxHelper.GetAdminUser().then(user=>{
        BoxHelper.userName = user;
        this.GetUserGroupCollection(user);
      });
    });
  }
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.groupLoaded.length === 20)
    {
      console.log(new Date());
      this.setState({IsLoading:"block"});
    }
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
                  this.AddGroupInfo(groupPosition,membership.group.name,groupInfo.description, membership.group.id, membership.id, membership.role,dt.format("DD MMM YYYY"), groupInfo.invitability_level);
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
    reactHandler.state.Groups.slice();
    let arrayvar = reactHandler.state.Groups.slice();
    arrayvar.push({"groupIndex": rowId,"groupName":groupName,"groupDesc":groupDesc,
                   "groupId":groupId,"membershipId":membershipId,"role":role,
                   "groupCreatedDate":groupCreatedDate,
                   "groupInviteLevel":groupInviteLevel});
    this.setState({Groups:arrayvar});
  }
  
  render() {
    return (
      <div className="container bxPageWrapper">
        <PageHeader />
        <TableHeader />
        <Scrollbars style={{height: 750}} autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <div className="slimScrollDiv" style={{"marginLeft":"15px","position": "relative", "overflow": "hidden", "width": "auto"}}>
            <div className="panel-group bxDashboardAccordion" id="accordion" style={{"overflow": "hidden", "width": "auto"}}>
                
                {this.state.Groups.map(function(item,key)
                  {
                    return <GroupRow groupInfo = {item} key={key}/>;
                  },this)
                }
            </div>
          </div>
        </Scrollbars>      
        <CreateGroup/>
        <Loader IsLoading={this.state.IsLoading}/>
      </div>
    );
  }
}
App.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  groupLoaded:PropTypes.array.isRequired,
  groupOffset:PropTypes.object.isRequired,   
  
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    groupLoaded: state.groupLoaded,
    groupOffset:state.groupOffset   
    
  };
}
export default connect(mapStateToProps)(App);
