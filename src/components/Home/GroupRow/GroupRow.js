import React from 'react';
import GroupDetails from './GroupDetails';
import GroupMembersRow from './GroupMembers/GroupMembersRow';
import GroupFoldersRow from './GroupFolders/GroupFoldersRow';

class GroupRow extends React.Component
{
    render()
    {
        return(
            <div className="panel panel-default bxDashRowWrap">
                <div className="panel-heading">
                    <a className="bxDashGroupCol">
                        <span data-toggle="collapse" data-parent="#accordion" data-target="#1043046214">IBX Administrative</span>
                        
                    </a>
                    <span className="bxDashAdminCol">
                        Corey Harrison and 1 more
                    </span>
                    <a className="bxDashMemberCol">
                        <span data-toggle="collapse" data-parent="#accordion" data-target="#1043046214Members">12</span>
                    </a>
                    <a className="bxDashFoldersCol">
                        <span data-toggle="collapse"  data-parent="#accordion" data-target="#1043046214Folders">6</span>
                    </a>
                    <span className="bxDashDateCol">
                        21 Apr 18
                    </span>
                </div>
                <GroupDetails/>
                <GroupMembersRow/>
                <GroupFoldersRow/>
			</div>
        );
    }
}
export default GroupRow;