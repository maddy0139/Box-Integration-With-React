import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GroupFolderTop from './GroupFolderTop';
import GroupFoldersHeader from './GroupFodlersHeader';
import GroupFolder from './GroupFolder';
import BoxHelper from '../../../../Helper/BoxHelper';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../../actions/groupActions';
import Loader from '../../Loader';

let moment = require('moment');

class GroupFoldersRow extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            GroupFolders:this.props.GroupFolders,
            GroupId : this.props.groupInfo.groupId,
            GroupName: this.props.groupInfo.groupName,
            CanSave:false
        };
        this.SaveFolderChanges = this.SaveFolderChanges.bind(this);
        this.RemoveFoldersFromGroup = this.RemoveFoldersFromGroup.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        const newState = this.state;
        newState.GroupFolders = nextProps.GroupFolders;
        newState.CanSave = nextProps.CanSaveFolder;
        this.setState({newState});
    }
    RemoveFoldersFromGroup(folderId)
    {
        const newState = this.state;
        const index = newState.GroupFolders.findIndex(a=>a.FolderId===folderId);
        if(index === -1) return;
        this.props.RemoveFoldersFromGroup(newState.GroupFolders[index]);
        newState.GroupFolders.splice(index,1);
        newState.CanSave = true;
        this.setState({newState});
        
    }
    SaveFolderChanges()
    {
        this.props.SaveFolderChanges();
    }
    render()
    {
        return(
            <div className="FolderColumn panel-collapse collapse" id={this.state.GroupId+"Folders"}>
                <GroupFolderTop GroupId = {this.state.GroupId} CanSave={this.state.CanSave} SaveFolderChanges={this.props.SaveFolderChanges}/>
                <GroupFoldersHeader/>
                <div style={{"width":"100%"}}>
                    {this.state.GroupFolders.map(function(item,key)
                        {
                            return(<GroupFolder FolderInfo={item} key={item.FolderId} RemoveFoldersFromGroup={this.RemoveFoldersFromGroup}/>);
                        },this)
                    }
                    <Loader id={"admin-loading-screen"} IsLoaded={this.props.IsFolderLoaded}/>
                </div>
            </div>
        );
    }
}
GroupFoldersRow.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    groupInfo: PropTypes.object.isRequired,
    SetFolderCount:PropTypes.func.isRequired
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
export default connect(mapStateToProps, mapDispatchToProps)(GroupFoldersRow);