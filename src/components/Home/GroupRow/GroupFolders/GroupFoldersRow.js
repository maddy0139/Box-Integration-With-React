import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GroupFolderTop from './GroupFolderTop';
import GroupFoldersHeader from './GroupFodlersHeader';
import GroupFolder from './GroupFolder';
import BoxHelper from '../../../Helper/BoxHelper';
import $ from 'jquery';
let moment = require('moment');

class GroupFoldersRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            GroupFolders:[],
            FolderCount:"",
            GroupId : this.props.groupInfo.groupId,
            GroupName: this.props.groupInfo.groupName
        };
    }
    componentDidMount()
    {
        BoxHelper.GetCollaborationsForGroup(this.state.GroupId).then(collabInfo =>{
            $.each(collabInfo,(index,info)=>{
                BoxHelper.GetFoldersInformation(info.item.id).then(folderInfo =>{
                    this.SetFoldersDetails(folderInfo,info);
                })
            });
        });
    }

    SetFoldersDetails(folderInfo,info){
        this.setState({FolderCount:info.length});
        let dt = moment(folderInfo.modified_at);
        let arrayvar = this.state.GroupFolders.slice();
        arrayvar.push({"FolderCollabId":info.id,"FolderId":folderInfo.id,"GroupId":this.state.GroupId,
                        "Name":folderInfo.name,"GroupName":this.state.GroupName,
                    "FolderOwner":folderInfo.owned_by.name,"LastModified":dt.format("DD MMM YYYY"),
                    "FolderSize":parseInt(folderInfo.size / 1024),"GroupRole":info.role,"SelectedGroupRole":info.role});
        this.setState({GroupFolders:arrayvar});
    }

    render()
    {
        return(
            <div className="FolderColumn panel-collapse collapse" id={this.state.GroupId+"Folders"}>
                <GroupFolderTop/>
                <GroupFoldersHeader/>
                <div style={{"width":"100%"}}>
                    {this.state.GroupFolders.map(function(item,key)
                        {
                            return(<GroupFolder FolderInfo={item} key={key}/>);
                        },this)
                    }
                </div>
            </div>
        );
    }
}

export default (GroupFoldersRow);