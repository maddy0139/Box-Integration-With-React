import React from 'react';

class GroupMember extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            MemberInfo:this.props.MemberInfo
        };
    }
    render()
    {
        return(
            <div className="detailMemberRow">
                <span className="detailMemNameLabel">{this.state.MemberInfo.Name}</span>
                <span className="detailMemEmailLabel">{this.state.MemberInfo.Email}</span>
                <span className="detailMemPermiLabel">
                    <select value={this.state.MemberInfo.selectedPermission}>
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                    </select>
                </span>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)">Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupMember;