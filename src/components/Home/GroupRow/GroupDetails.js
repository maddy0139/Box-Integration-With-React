import React from 'react';

class GroupDetails extends React.Component
{
    render()
    {
        return(
            <div className="panel-collapse collapse" id={this.props.groupInfo.groupId}>
                <div className="detailGroupNameCol">
                    <span className="detailLabel">Name</span>
                    <span className="detailTxt" >{this.props.groupInfo.groupName}</span>
                </div>
                <div className="detailGroupDescriCol">
                    <span className="detailLabel">Description</span>
                    <span className="detailTxt" >{this.props.groupInfo.groupDesc}</span>
                </div>
                <div className="detailGroupPermCol">
                    <span className="detailLabel">Permission Settings</span>
                    <span className="detailTxt" >{this.props.groupInfo.groupInviteLevel}</span>
                </div>
                <div className="detailGroupDateCol">
                </div>
                <div className="detailGroupEditCol">
                    <input type="button" value="Edit" className="editBtn" />
                </div>
            </div>
        );
    }
}
export default GroupDetails;