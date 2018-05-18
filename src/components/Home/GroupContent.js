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
            <GroupRow groupName={this.props.groupName}/>
        );
    }
}
export default GroupContent;