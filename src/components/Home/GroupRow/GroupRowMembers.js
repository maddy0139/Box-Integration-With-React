import React from 'react';

class GroupRow extends React.Component
{
    render()
    {
        return(
            <div className="bxDashColHeader">
				<span className="bxDashGroupCol">Group</span>
				<span className="bxDashAdminCol">Group Admin</span>
				<span className="bxDashMemberCol">Members</span>
				<span className="bxDashFoldersCol">Folders</span>
				<span className="bxDashDateCol">Created On</span>
			</div>
        );
    }
}
export default GroupRow;