import React from 'react';

class GroupFolderTop extends React.Component
{
    render()
    {
        return(
            <div className="detailMemberTop">
                <span>Folders</span>
                <div className="detailMemberTopLinks">
                    <a href="javascript:void(0)" className="Link" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#addFolderModal">Share Folders</a>
                    <a data-target="#saveModal" data-backdrop="static" data-keyboard="false"  className="dsblLink">Save</a>
                </div>
            </div>
        );
    }
}
export default GroupFolderTop;
