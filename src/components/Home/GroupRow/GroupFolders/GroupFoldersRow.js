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
import FolderLoader from '../../FolderLoader';

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
            BPA: {title: ""},
            course: { title: "test" }
        };
        this.RemoveFolder = this.RemoveFolder.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({GroupFolders:nextProps.GroupFolders});
    }
    RemoveFolder(folderId)
    {
        const newState = this.state;
        const index = newState.GroupFolders.findIndex(a=>a.FolderId===folderId);
        if(index === -1) return;
        newState.GroupFolders.splice(index,1);
        this.setState({newState});
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
                            return(<GroupFolder FolderInfo={item} key={item.FolderId} RemoveFolder={this.RemoveFolder}/>);
                        },this)
                    }
                    <FolderLoader id={"admin-loading-screen"} IsLoading={this.props.IsFolderLoaded}/>
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