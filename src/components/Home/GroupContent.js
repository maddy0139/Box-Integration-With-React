import React from 'react';
import GroupRow from './GroupRow/GroupRow';

class GroupContent extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {

    }
    render()
    {
        return(
            <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto", "height": "750px"}}>
                <div className="panel-group bxDashboardAccordion" id="accordion" style={{"overflow": "hidden", "width": "auto", "height": "750px"}}>
                    <GroupRow groupName={this.props.groupName}/>
                </div>
            </div>
        );
    }
}
export default GroupContent;