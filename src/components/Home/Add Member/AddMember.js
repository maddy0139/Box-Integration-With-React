import React from 'react';

class AddMember extends React.Component
{
    constructor(props,context)
    {
        super(props);
        this.CloseDialog = this.CloseDialog.bind(this);
    }
    CloseDialog()
    {
        $("#addMemberModal").modal('toggle');
    }
    render()
    {
        return(
            <div id="addMemberModal" className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" onClick={this.CloseDialog.bind(this)}>×</button>
							<h4 className="modal-title" data-bind="text:$root.SelectedGroupName">Add Members to IBX Group 1</h4>
							<span className="bxAddMemberLabel" data-bind="text:$root.IsNewgroup()?CreateGroupStep():''"></span>
						</div>
						<div className="modal-body">
							<div className="bxAddMemberField">
								<div className="bxAddMemberBox">
									<div className="bxAddMemberBoxLHS">
										<span className="bxAddMemberLabel">Select member</span>
										<div className="bxAddMemberPicker">
											<div data-bind="foreach:AddMembersArray"></div>
											<input type="text" className="bxAddedMemTxtBox" data-bind="value: Query, valueUpdate: 'keyup'" autoComplete="off"/>
											<ul className="peoplePickerList" data-bind="foreach: enterpriseUsers"></ul>
										</div>
										<p className="alertMsg" id="addMemberValidation"></p>
									</div>
										
									<button type="button" className="bxAddMemberBoxbutton" data-bind="click:$root.CanAddMember()?$root.AddMemberToGroup:null,css:$root.CanAddMember()?'bxAddMemberBoxbutton':'bxAddMemberBoxDsblbutton'">Add User</button>
								</div>
							</div>
							
							</div>
						</div>
						
					</div>
			</div>
        );
    }
}

export default AddMember;