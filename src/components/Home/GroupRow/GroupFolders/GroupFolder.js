import React from 'react';

class GroupFolder extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            FolderInfo: this.props.FolderInfo
        };
        this.OnPermissionChange = this.OnPermissionChange.bind(this);
        this.RemoveFolder = this.RemoveFolder.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({FolderInfo:nextProps.FolderInfo});
    }
    OnPermissionChange(event)
    {
        let MemberInfo = Object.assign({}, this.state.FolderInfo);
        MemberInfo.GroupRole = event.target.value;
        this.setState({MemberInfo});
    }
    RemoveFolder(folderId)
    {
        this.props.RemoveFolder(folderId);
    }
    render()
    {
        return(
            <div className="detailMemberRow">					
                <span className="detailFoldNameLabel" data-bind="text:Name">{this.state.FolderInfo.Name}</span>
                <span className="detailFoldOwnLabel" data-bind="text:FolderOwner">{this.state.FolderInfo.FolderOwner}</span>
                <span className="detailFoldModiLabel" data-bind="text:LastModified">{this.state.FolderInfo.LastModified}</span>
                <span className="detailFoldSizeLabel"></span>
                    <select value={this.state.FolderInfo.GroupRole} onChange={this.OnPermissionChange}>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                        <option value="previewer">Previewer</option>
                        <option value="co-owner">Co-Owner</option>
                        <option value="viewer uploader">Viewer Uploader</option>
                        <option value="previewer uploader">Previewer Uploader</option>
                        <option value="uploader">Uploader</option>
                    </select>
                <span className="detailMemRemoveLabel">
                    <a href="javascript:void(0)" onClick={this.RemoveFolder.bind(this,this.state.FolderInfo.FolderId)}>Remove</a>
                </span>
            </div>
        );
    }
}
export default GroupFolder;