import React from 'react';

class CreateGroup extends React.Component {

    render() {
        return (
            <div id="addGroupModal" className="modal fade" role="dialog" style={{"display": "none"}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">×</button>
							<h4 className="modal-title">Create New Group</h4>
							<span className="bxAddMemberLabel" >Step 1 of 3</span>
						</div>
						<div className="modal-body">
							<div className="bxCreateGroup">
								<div className="bxCreateGroupCategory">
									
									<span className="bxCreateGroupTopLabel">Group Name</span>
									<span className="bxCreateGroupTxt">Enter a unique group name that has not already been used in your account</span>
									<span className="bxAddMemberLabel">Group Name</span>
									<input type="text" placeholder="Enter group name here" maxLength="255" title="Group Name" className="bxCreateGroupTxtbox"/>
									<p className="alertMsg" id="groupValidation"></p>
									
									<span className="bxAddMemberLabel">Description</span>
									<textarea placeholder="Enter here" title="Group Description" maxLength="255" className="bxCreateGroupTxtarea" autoComplete="off"></textarea>
									<p id="characterCount" >Remaining characters 255</p>
								</div>
								
								<div className="bxCreateGroupCategory">
									<span className="bxCreateGroupTopLabel">Permission settings</span>
									<span className="bxCreateGroupTxt">Only Admins can invite this group to folders and view members in this group in Admin Console.</span>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default btn-active" >Create Group</button>
							<button type="button" className="btn btn-default btn-disable" data-dismiss="modal">Cancel</button>
						</div>
					</div>
                </div>
			</div>
        );
    }
}
export default CreateGroup;