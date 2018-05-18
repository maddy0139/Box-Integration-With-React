import React from 'react';

class GroupFolder extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberRow">					
                <span className="detailFoldNameLabel" data-bind="text:Name">IBX Group 1 Folder</span>
                <span className="detailFoldOwnLabel" data-bind="text:FolderOwner">Mahendra</span>
                <span className="detailFoldModiLabel" data-bind="text:LastModified">11 May 2018</span>
                <span className="detailFoldSizeLabel"></span>
                <span className="detailMemPermiLabel detailFoldPerLabel" data-bind="value:SelectedGroupRole,event: { change: $root.FolderPermissionChange}">
                    <select data-bind="value:GroupRole">
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                        <option value="previewer">Previewer</option>
                        <option value="co-owner">Co-Owner</option>
                        <option value="viewer uploader">Viewer Uploader</option>
                        <option value="previewer uploader">Previewer Uploader</option>
                        <option value="uploader">Uploader</option>
                    </select>
                </span>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)" data-bind="click:$root.RemoveFolderFromGroup">Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupFolder;