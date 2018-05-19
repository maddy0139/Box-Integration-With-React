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
            <GroupRow groupInfo={this.props.groupInfo}/>
        );
    }
}
export default GroupContent;