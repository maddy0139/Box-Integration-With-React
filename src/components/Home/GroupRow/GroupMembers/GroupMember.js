import React from 'react';

class GroupMember extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberRow">
                <span className="detailMemNameLabel" data-bind="text:Name">Mahendra</span>
                <span className="detailMemEmailLabel" data-bind="text:Email">mahendra.gohel@spadeworx.com</span>
                <span className="detailMemPermiLabel">
                    <select data-bind="value:selectedPermission,event: { change: $root.MemberRoleChange}">
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                    </select>
                </span>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)" data-bind="click:$root.RemoveMemberFromGroup">Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupMember;