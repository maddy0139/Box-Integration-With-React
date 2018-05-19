import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import GroupDetails from './GroupDetails';
import GroupMembersRow from './GroupMembers/GroupMembersRow';
import GroupFoldersRow from './GroupFolders/GroupFoldersRow';

class GroupRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }
    groupRow(group, index) {
        return <div key={index}>{group}</div>;
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
                        
                    </span>
                    <a className="bxDashMemberCol">
                        <span data-toggle="collapse" data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId+"Members"}>12</span>
                    </a>
                    <a className="bxDashFoldersCol">
                        <span data-toggle="collapse"  data-parent="#accordion" data-target={"#"+this.props.groupInfo.groupId+"Folders"}>6</span>
                    </a>
                    <span className="bxDashDateCol">
                    {this.props.groupInfo.groupCreatedDate}
                    </span>
                </div>
                <GroupDetails groupInfo = {this.props.groupInfo}/>
                <GroupMembersRow groupInfo = {this.props.groupInfo}/>
                <GroupFoldersRow groupInfo = {this.props.groupInfo}/>
			</div>
        );
    }
}

export default (GroupRow);