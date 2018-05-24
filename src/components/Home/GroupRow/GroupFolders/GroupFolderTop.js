import React from 'react';

class GroupFolderTop extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            SaveButtonClass:'dsblLink',
            GroupId:this.props.GroupId,
            CanSave:false
        };
        this.SaveFolderDialogToggle = this.SaveFolderDialogToggle.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({SaveButtonClass:(nextProps.CanSave===true)?'Link':'dsblLink'});
        this.setState({CanSave:nextProps.CanSave});
    }
    SaveFolderDialogToggle()
    {
        if(this.state.CanSave)
        {
            $("#SaveFolder"+this.state.GroupId).modal('toggle');
        }
    }
    render()
    {
        return(
            <div className="detailMemberTop">
                <span>Folders</span>
                <div className="detailMemberTopLinks">
                    <a href="javascript:void(0)" className="Link" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#addFolderModal">Share Folders</a>
                    <a onClick={this.SaveFolderDialogToggle.bind(this)} className={this.state.SaveButtonClass} data-backdrop="static" data-keyboard="false" >Save</a>
                </div>
            </div>
        );
    }
}
export default GroupFolderTop;
