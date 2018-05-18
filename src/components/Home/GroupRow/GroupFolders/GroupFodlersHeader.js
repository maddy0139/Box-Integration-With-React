import React from 'react';

class GroupFoldersHeader extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberRow detailMemberHeadRow">
                <span className="detailFoldNameLabel">Folder Name</span>
                <span className="detailFoldOwnLabel">Owner</span>
                <span className="detailFoldModiLabel">Modified On</span>
                <span className="detailFoldSizeLabel"></span>
                <span className="detailFoldPerLabel">Permission</span>
                <span>&nbsp;</span>
            </div>
        );
    }
}
export default GroupFoldersHeader;