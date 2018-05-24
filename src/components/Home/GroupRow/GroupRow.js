import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import GroupDetails from './GroupDetails';
import GroupMembersRow from './GroupMembers/GroupMembersRow';
import GroupFoldersRow from './GroupFolders/GroupFoldersRow';
import CreateGroup from '../Create Group/CreateGroup';
import BoxHelper from '../../../Helper/BoxHelper';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../actions/groupActions';

let moment = require('moment');
class GroupRow extends React.Component
{
    constructor(props,context)
    {
        super(props,context);
        this.state = {
            GroupId : this.props.groupInfo.groupId,
            GroupName: this.props.groupInfo.groupName,
            CollaborationInfo:null,
            FolderCount:'',
            MemberCount:'',
            GroupAdmin:'',
            GroupAdminCount:0,
            GroupFolders:[],
            GroupMembers:[],
            GroupLoaded: { GroupId: this.props.groupInfo.groupId },
            IsLoading:true,
            IsFolderLoaded:false
        };
        this.SetGroupAdmin = this.SetGroupAdmin.bind(this); 
        this.GetGroupFolders = this.GetGroupFolders.bind(this);       
    }
    componentDidMount()
    {
        this.GetGroupCollaboration(this.state.GroupId);
    }
    GetGroupFolders()
    {
        if(this.state.GroupFolders.length === 0)
        {
            let count = 0;
            this.state.CollaborationInfo.map((info,key)=>{
                BoxHelper.GetFoldersInformation(info.item.id).then(folderInfo =>{
                    this.SetFoldersDetails(folderInfo,info);
                    count++;
                    if(count === this.state.CollaborationInfo.length)
                    {
                        this.setState({IsFolderLoaded:true});
                    }
                });
            });
        }
    }
    GetGroupCollaboration(groupId)
    {
        BoxHelper.GetCollaborationsForGroup(this.state.GroupId).then(collabInfo =>{
                this.setState({CollaborationInfo:collabInfo});
                this.setState({FolderCount:collabInfo.length});
                this.GetGroupMembers(this.state.GroupId);
                /*
                $.each(collabInfo,(index,info)=>{
                    BoxHelper.GetFoldersInformation(info.item.id).then(folderInfo =>{
                        count++;
                        this.SetFoldersDetails(folderInfo,info,collabInfo.length);
                        if(count === collabInfo.length)
                        {    
                            
                        }
                        
                    });
                });*/
            
        });
    }
    GetGroupMembers(groupId)
    {
        BoxHelper.GetGroupUsers(this.state.GroupId).then(members=>{
            this.SetGroupMembersDetails(members);
            this.setState({IsLoading:false});
            this.props.actions.setGroupLoader(this.state.GroupLoaded);
            this.props.actions.setGroupOffset({"offset":20});
        });
    }
    SetFoldersDetails(folderInfo,info)
    {
        let dt = moment(folderInfo.modified_at);
        let arrayvar = this.state.GroupFolders.slice();
        arrayvar.push({"FolderCollabId":info.id,"FolderId":folderInfo.id,"GroupId":this.state.GroupId,
                        "Name":folderInfo.name,"GroupName":this.state.GroupName,
                    "FolderOwner":folderInfo.owned_by.name,"LastModified":dt.format("DD MMM YYYY"),
                    "FolderSize":parseInt(folderInfo.size / 1024),"GroupRole":info.role,"SelectedGroupRole":info.role});
        this.setState({GroupFolders:arrayvar});
        
    }
    SetGroupMembersDetails(members)
    {
        this.setState({MemberCount:members.length});
        $.each(members,(index,member)=>{
            if(member.role === 'admin')
            {
                this.SetGroupAdmin(member.user.name);
            }
            let arrayvar = this.state.GroupMembers.slice();
            arrayvar.push({"GroupIndex":index,"GroupMembershipId":member.id,"GroupId":this.state.GroupId,
                            "Name":member.user.name,"Email":member.user.login,
                            "UserId":member.user.id,"GroupName":this.state.GroupName,
                            "selectedPermission":member.role});
            this.setState({GroupMembers:arrayvar});
        });
    }
    SetGroupAdmin(member)
    {
        let adminCount = this.state.GroupAdminCount;
        let admin = '';
        adminCount++;
        this.setState({GroupAdminCount:adminCount});
        if(adminCount > 1)
        {
            admin = member + " + "+(adminCount-1)+" More";
        }
        else
        {
            admin = member;
        }
        this.setState({GroupAdmin:admin});
    }
    render()
    {
        if(this.state.IsLoading === false)
        {
            return(
                <div className="panel panel-default bxDashRowWrap">
                    <div className="panel-heading">
                        <a className="bxDashGroupCol">
                            <span data-toggle="collapse" data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId}>{this.props.groupInfo.groupName}</span>
                        </a>
                        <span className="bxDashAdminCol">
                            {this.state.GroupAdmin}
                        </span>
                        <a className="bxDashMemberCol">
                            <span data-toggle="collapse" data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId+"Members"}>{this.state.MemberCount}</span>
                        </a>
                        <a className="bxDashFoldersCol">
                            <span data-toggle="collapse"  data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId+"Folders"} onClick={this.GetGroupFolders.bind(this,this.state.GroupId)}>{this.state.FolderCount}</span>
                        </a>
                        <span className="bxDashDateCol">
                        {this.props.groupInfo.groupCreatedDate}
                        </span>
                    </div>
                    <GroupDetails groupInfo = {this.props.groupInfo}/>
                    <GroupMembersRow groupInfo = {this.props.groupInfo} GroupMembers = {this.state.GroupMembers}/>
                    <GroupFoldersRow groupInfo = {this.props.groupInfo} GroupFolders = {this.state.GroupFolders} IsFolderLoaded={this.state.IsFolderLoaded}/>       
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}
GroupFoldersRow.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    groupLoaded:PropTypes.array.isRequired, 
    groupOffset:PropTypes.object.isRequired,   
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        groupLoaded:state.groupLoaded,
        groupOffset:state.groupOffset   
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupRow);