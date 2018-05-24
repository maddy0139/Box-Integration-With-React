import React from 'react';

class SaveFolderConfirmDialog extends React.Component{
    constructor(props)
    {
		super(props);
		this.state = {
			GroupId: this.props.GroupId
		};
		this.SaveFolderChanges = this.SaveFolderChanges.bind(this);
	}
	componentWillReceiveProps(nextProps)
	{
		this.setState({RemovedFolders:nextProps.RemovedFolders});
	}
	SaveFolderChanges()
	{
		this.props.SaveFolderChanges();
	}
    render()
    {
        return(
            <div id={"SaveFolder"+this.state.GroupId} className="saveFolderModal modal fade" role="dialog">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">×</button>
							<h4 className="modal-title">Confirm changes</h4>
						</div>
						<div className="modal-body">
							<p className="bxmodalMsg">Are you sure to save the changes?</p>
						</div>
						<div className="modal-footer">
							<button onClick={this.props.SaveFolderChanges.bind(this)} type="button" className="btn btn-default btn-active">Yes</button>
							<button type="button" className="btn btn-default btn-active" data-dismiss="modal">No</button>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
export default SaveFolderConfirmDialog;