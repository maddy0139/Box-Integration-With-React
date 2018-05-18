import React from 'react';
import GroupMemberTop from './GroupMemberTop';
import GroupMembersHeader from './GroupMembersHeader';
import GroupMember from './GroupMember';

class GroupMembersRow extends React.Component
{
    render()
    {
        return(
            <div className="MemberColumn panel-collapse collapse" id="1043046214Members">
                <GroupMemberTop/>
                <GroupMembersHeader/>
                <div style={{"width":"100%"}}>
                    <GroupMember/>
                </div>
			</div>
        );
    }
}
export default GroupMembersRow;