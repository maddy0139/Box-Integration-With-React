import React from 'react';

class PageHeader extends React.Component
{
    render()
    {
        return(
            <div className="bxDashHead" style={{"marginLeft":"15px"}}>
				<div className="bxDashHeadLHS">
					<span className="bxDashHeadLHSTitle">
						Groups
					</span>
					<span className="bxDashHeadLHSDescri">
						Groups allow you to give members access to relevant content. Members and content can be added to a group in the admin console.
					</span>
				</div>
				<div className="bxDashHeadRHS">
					<span className="bxDashAddGroupBtn" data-toggle="modal" data-target="#addGroupModal" data-backdrop="static" data-keyboard="false">Create New Group</span>					
					<div className="bxDashSearchDv">
						<input type="text" placeholder="Search group here" className="bxSearchBox" autoComplete="off"/>
					</div>
				</div>
			</div>
        );
    }
}
export default PageHeader;