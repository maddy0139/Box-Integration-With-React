import React from 'react';
import GroupFolderTop from './GroupFolderTop';
import GroupFoldersHeader from './GroupFodlersHeader';
import GroupFolder from './GroupFolder';

class GroupFoldersRow extends React.Component
{
    render()
    {
        return(
            <div className="FolderColumn panel-collapse collapse" id="1043046214Folders">
                <GroupFolderTop/>
                <GroupFoldersHeader/>
                <div style={{"width":"100%"}}>
                    <GroupFolder/>
                </div>
            </div>
        );
    }
}
export default GroupFoldersRow;