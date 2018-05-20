import React from 'react';
import GroupMemberTop from './GroupMemberTop';
import GroupMembersHeader from './GroupMembersHeader';
import GroupMember from './GroupMember';
import BoxHelper from '../../../Helper/BoxHelper';
import $ from 'jquery';

class GroupMembersRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            GroupMembers:[],
            GroupId:this.props.groupInfo.groupId,
            GroupName:this.props.groupInfo.groupName
        };
        this.RemoveMember = this.RemoveMember.bind(this);
    }


    componentDidMount()
    {
        BoxHelper.GetGroupUsers(this.state.GroupId).then(members=>{
            this.SetGroupMembersDetails(members);
        });
    }
    componentWillReceiveProps(nextProps)
    {
    }
    RemoveMember(memberId)
    {
        const newState = this.state;
        const index = newState.GroupMembers.findIndex(a=>a.UserId===memberId);
        if(index === -1) return;
        newState.GroupMembers.splice(index,1);
        this.setState({newState});
    }
    SetGroupMembersDetails(members)
    {
        this.props.SetMemberCount(members.length);
        $.each(members,(index,member)=>{
            if(member.role === 'admin')
            {
                this.props.SetGroupAdmin(member.user.name);
            }
            let arrayvar = this.state.GroupMembers.slice();
            arrayvar.push({"GroupIndex":index,"GroupMembershipId":member.id,"GroupId":this.state.GroupId,
                            "Name":member.user.name,"Email":member.user.login,
                            "UserId":member.user.id,"GroupName":this.state.GroupName,
                            "selectedPermission":member.role});
            this.setState({GroupMembers:arrayvar});
        });
    }
    render()
    {
        return(
            <div className="MemberColumn panel-collapse collapse" id={this.state.GroupId+"Members"}>
                <GroupMemberTop/>
                <GroupMembersHeader/>
                <div style={{"width":"100%"}}>
                    {this.state.GroupMembers.map(function(item,key)
                        {
                            return(
                                <GroupMember MemberInfo={item} key={key} RemoveMember={this.RemoveMember}/>
                            );
                        },this)
                    }
                </div>
			</div>
        );
    }
}
export default GroupMembersRow;