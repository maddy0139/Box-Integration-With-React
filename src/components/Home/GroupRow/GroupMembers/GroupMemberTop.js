import React from 'react';

class GroupMemberTop extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberTop">
                <span>Group Members </span>
                <div className="detailMemberTopLinks">
                    <a href="#" data-toggle="modal" data-target="#addMemberModal" data-backdrop="static" data-keyboard="false" className="Link" data-bind="click:$root.BindEnterpriseUsers">Add Members</a>
                    
                    <a data-toggle="modal" data-target="#saveModal" data-backdrop="static" data-keyboard="false" data-bind="click: canSaveMembers() ? $root.GroupMemberSaveConfirmDialog : null,css:SaveMemberButtonClassName()" className="dsblLink">Save</a>
                </div>
            </div>
        );
    }
}
export default GroupMemberTop;