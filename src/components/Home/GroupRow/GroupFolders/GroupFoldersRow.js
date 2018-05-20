import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import GroupFolderTop from './GroupFolderTop';
import GroupFoldersHeader from './GroupFodlersHeader';
import GroupFolder from './GroupFolder';
import BoxHelper from '../../../Helper/BoxHelper';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../../actions/courseActions';

let moment = require('moment');

class GroupFoldersRow extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            GroupFolders:[],
            GroupId : this.props.groupInfo.groupId,
            GroupName: this.props.groupInfo.groupName,
            BPA: {title: ""},
            course: { title: "" }
        };
        this.RemoveFolder = this.RemoveFolder.bind(this);
    }
    
    componentDidMount()
    {
        BoxHelper.GetCollaborationsForGroup(this.state.GroupId).then(collabInfo =>{
            if(collabInfo.length >0)
            {
                $.each(collabInfo,(index,info)=>{
                    BoxHelper.GetFoldersInformation(info.item.id).then(folderInfo =>{
                        this.SetFoldersDetails(folderInfo,info,collabInfo.length);
                    })
                });
            }
            else{
                this.props.SetFolderCount(collabInfo.length);                
            }
        });
    }
    RemoveFolder(folderId)
    {
        const newState = this.state;
        const index = newState.GroupFolders.findIndex(a=>a.FolderId===folderId);
        if(index === -1) return;
        newState.GroupFolders.splice(index,1);
        this.setState({newState});
    }
    SetFoldersDetails(folderInfo,info,folderCount)
    {
        this.props.SetFolderCount(folderCount);
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
                            return(<GroupFolder FolderInfo={item} key={key} RemoveFolder={this.RemoveFolder}/>);
                        },this)
                    }
                </div>
            </div>
        );
    }
}
GroupFoldersRow.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default (GroupFoldersRow);