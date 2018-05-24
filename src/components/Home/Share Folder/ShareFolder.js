import React from 'react';
import Loader from '../Loader';

class ShareFolder extends React.Component
{
    constructor(props,context)
    {
        super(props);
        this.CloseDialog = this.CloseDialog.bind(this);        
    }
    CloseDialog()
    {
        $("#addFolderModal").modal('toggle');
    }
    render()
    {
        return(
            <div id="addFolderModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" onClick={this.CloseDialog}>×</button>
							<h4 className="modal-title" data-bind="text:$root.SelectedGroupName">Share Folders to IBX Group 1</h4>
							<span className="bxAddMemberLabel" data-bind="text:$root.IsNewgroup()?CreateGroupStep():''"></span>							
						</div>
						<div className="modal-body">
							<div className="bxFolder">
								
								<div className="FolderColumn">
									<div className="bxFolderBreadCrumb">
										<span style={{"float":"left"}} className="detailFoldNameLabel">Folders</span>
										<ul data-bind="foreach:selectedFolders" className="bxFolderBreadCrumb">
											<li className="bxFolderItem">
												<span className="detailFoldNameLabel" data-bind="text:Name,click:$root.GetItemsOnNodeClick">My Files</span>
											</li>
										</ul>
									</div>
									
									<a className="dsblLink" data-backdrop="static" data-keyboard="false" data-bind="click: canShareFolders() ? ShareFolders : null,css:ShareFolderButtonClassName()">Save</a>
									<div className="detailMemberRow detailMemberHeadRow folderRow">
										<span className="emptyCol">&nbsp;</span>
										<span className="detailFoldNameLabel">Folder Name</span>
										<span className="detailFoldOwnLabel">Owner</span>
										<span className="detailFoldPerLabel">Permission</span>
										<span className="detailFoldModiLabel">Modified On</span>
									</div>	
									<div data-bind="foreach:$root.FoldersArray,event: { scroll: $root.GetFoldersOnScroll }" id="folderListonPopup" style={{"maxHeight": "310px", "overFlowY": "auto"}}>
									
										<div className="detailMemberRow folderPopupRow" data-bind="css:HighlightRowClassName()">
										
											<div className="csCheckbox detailGroupEditCol AddFolderCkBx" style={{"display":"inline-block","marginLeft": "2px"}}>
												<input type="checkbox" className="folderSelectButton" data-bind="attr:{'id':FolderId},checked:SelectButtonValue(),click:$root.AddShareFolderToArray,value:SelectButtonValue()" id="49684287198" value="Select"/>
												<label data-bind="attr:{'for':FolderId}" htmlFor="49684287198">&nbsp;</label>
											</div>
											<span className="detailFoldNameLabel" data-bind="text:Name,click:$root.GetSelectedFolderItems">IBX Group 5 Folder test 17</span>
											<span className="detailFoldOwnLabel" data-bind="text:FolderOwner">Mahendra</span>
											<span className="detailFoldPerLabel">
												<select data-bind="value:GroupRole">
													<option value="editor">Editor</option>
													<option value="viewer">Viewer</option>
													<option value="Previewer">Previewer</option>
													<option value="co-owner">Co-Owner</option>
													<option value="viewer uploader">Viewer Uploader</option>
													<option value="previewer uploader">Previewer Uploader</option>
													<option value="uploader">Uploader</option>
												</select>
											</span>
											<span className="detailFoldModiLabel" data-bind="text:LastModified">23 May 2018</span>
										</div>
									</div>
									<Loader id={"group-row-loading-screen"} IsLoaded={true}/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        );
    }
}

export default ShareFolder;