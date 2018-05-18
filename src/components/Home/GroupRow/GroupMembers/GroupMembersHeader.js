import React from 'react';

class GroupMembersHeader extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberRow detailMemberHeadRow">
                <span className="detailMemNameLabel">Name</span>
                <span className="detailMemEmailLabel">Email</span>
                <span className="detailMemPermiLabel">Permissions</span>
                <span>&nbsp;</span>
            </div>
        );
    }
}
export default GroupMembersHeader;