import React from 'react';
import GroupRow from './GroupRow/GroupRow';

class GroupContent extends React.Component
{
    render()
    {
        return(
            <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto", "height": "750px"}}>
                <div className="panel-group bxDashboardAccordion" id="accordion" style={{"overflow": "hidden", "width": "auto", "height": "750px"}}>
                    <GroupRow/>
                </div>
            </div>
        );
    }
}
export default GroupContent;