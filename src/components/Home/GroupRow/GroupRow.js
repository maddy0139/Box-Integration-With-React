import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import GroupDetails from './GroupDetails';
import GroupMembersRow from './GroupMembers/GroupMembersRow';
import GroupFoldersRow from './GroupFolders/GroupFoldersRow';

class GroupRow extends React.Component
{
    constructor(props,context)
    {
        super(props,context)
        this.state = {
            GroupId : this.props.groupInfo.groupId,
            GroupName: this.props.groupInfo.groupName,
            FolderCount:'',
            MemberCount:'',
            GroupAdmin:'',
            GroupAdminCount:0
        };
        this.SetFolderCount = this.SetFolderCount.bind(this);
        this.SetMemberCount = this.SetMemberCount.bind(this);
        this.SetGroupAdmin = this.SetGroupAdmin.bind(this);        
    }
    
    SetFolderCount(count)
    {
        this.setState({FolderCount:count});
    }
    SetMemberCount(count)
    {
        this.setState({MemberCount:count});
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
    courseRow(course, index) {
        return <div key={index}>{course.Name}</div>;
    }
    render()
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
                        <span data-toggle="collapse"  data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId+"Folders"}>{this.state.FolderCount}</span>
                    </a>
                    <span className="bxDashDateCol">
                    {this.props.groupInfo.groupCreatedDate}
                    </span>
                </div>
                {this.props.courses.map(this.courseRow)}
                <GroupDetails groupInfo = {this.props.groupInfo}/>
                <GroupMembersRow groupInfo = {this.props.groupInfo} SetMemberCount={this.SetMemberCount} SetGroupAdmin={this.SetGroupAdmin}/>
                <GroupFoldersRow groupInfo = {this.props.groupInfo} SetFolderCount={this.SetFolderCount}/>
			</div>
        );
    }
}
GroupRow.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    //createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}
export default connect(mapStateToProps)(GroupRow);