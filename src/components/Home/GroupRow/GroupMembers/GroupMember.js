import React from 'react';

class GroupMember extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            MemberInfo:this.props.MemberInfo
        };
        this.OnPermissionChange = this.OnPermissionChange.bind(this);
        this.RemoveMember = this.RemoveMember.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({MemberInfo:nextProps.MemberInfo});
    }
    OnPermissionChange(event)
    {
        let MemberInfo = Object.assign({}, this.state.MemberInfo);
        MemberInfo.selectedPermission = event.target.value;
        this.setState({MemberInfo});
    }
    RemoveMember(memberId)
    {
        this.props.RemoveMember(memberId);
    }
    render()
    {
        return(
            <div className="detailMemberRow">
                <span className="detailMemNameLabel">{this.state.MemberInfo.Name}</span>
                <span className="detailMemEmailLabel">{this.state.MemberInfo.Email}</span>
                <span className="detailMemPermiLabel">
                    <select value={this.state.MemberInfo.selectedPermission} onChange={this.OnPermissionChange}>
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                    </select>
                </span>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)" onClick={this.RemoveMember.bind(this,this.state.MemberInfo.UserId)}>Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupMember;