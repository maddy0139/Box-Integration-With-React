import React from 'react';
import GroupMemberTop from './GroupMemberTop';
import GroupMembersHeader from './GroupMembersHeader';
import GroupMember from './GroupMember';
import BoxHelper from '../../../../Helper/BoxHelper';
import $ from 'jquery';

class GroupMembersRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            GroupMembers:this.props.GroupMembers,
            GroupId:this.props.groupInfo.groupId,
            GroupName:this.props.groupInfo.groupName
        };
        this.RemoveMember = this.RemoveMember.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({GroupMembers:nextProps.GroupMembers});
    }
    RemoveMember(memberId)
    {
        const GroupMembers = this.state.GroupMembers;
        const index = GroupMembers.findIndex(a=>a.UserId===memberId);
        if(index === -1) return;
        GroupMembers.splice(index,1);
        this.setState({GroupMembers});
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
                                <GroupMember MemberInfo={item} key={item.UserId} RemoveMember={this.RemoveMember}/>
                            );
                        },this)
                    }
                </div>
			</div>
        );
    }
}
export default GroupMembersRow;