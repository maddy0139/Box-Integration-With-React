import React from 'react';

class GroupFolder extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            FolderInfo: this.props.FolderInfo
        };
    }
    componentDidMount()
    {

    }
    render()
    {
        return(
            <div className="detailMemberRow">					
                <span className="detailFoldNameLabel" data-bind="text:Name">{this.state.FolderInfo.Name}</span>
                <span className="detailFoldOwnLabel" data-bind="text:FolderOwner">{this.state.FolderInfo.FolderOwner}</span>
                <span className="detailFoldModiLabel" data-bind="text:LastModified">{this.state.FolderInfo.LastModified}</span>
                <span className="detailFoldSizeLabel"></span>
                    <select value={this.state.FolderInfo.GroupRole}>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                        <option value="previewer">Previewer</option>
                        <option value="co-owner">Co-Owner</option>
                        <option value="viewer uploader">Viewer Uploader</option>
                        <option value="previewer uploader">Previewer Uploader</option>
                        <option value="uploader">Uploader</option>
                    </select>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)">Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupFolder;